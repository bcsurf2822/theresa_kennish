"use client";

import { useState, useEffect } from "react";

interface Comment {
  _id: string;
  pageId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

interface DeleteModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function DeleteModal({ isOpen, onConfirm, onCancel }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onCancel}
      />
      <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold mb-2">Delete Comment</h3>
        <p className="text-slate-600 mb-6">
          Are you sure you want to delete this comment? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const PAGE_OPTIONS = [
  { value: "home", label: "Home" },
  { value: "soft-artistic", label: "Soft Artistic" },
  { value: "bold-typography", label: "Bold Typography" },
  { value: "gallery-focus", label: "Gallery Focus" },
  { value: "contemporary-professional", label: "Contemporary Professional" },
  { value: "architectural-grid", label: "Architectural Grid" },
  { value: "immersive-scroll", label: "Immersive Scroll" },
  { value: "series", label: "Series" },
  { value: "style-guide", label: "Style Guide" },
];

interface CommentsProps {
  mode?: "default" | "compact" | "side-panel";
  pageId?: string;
}

export default function Comments({
  mode = "default",
  pageId = "home",
}: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [selectedPage, setSelectedPage] = useState(pageId);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchComments();
  }, [mode, pageId]);

  const fetchComments = async () => {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      if (data.success) {
        setComments(data.data);
      }
    } catch (error) {
      console.error("[Comments-fetchComments] Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const targetPageId = mode === "default" ? selectedPage : pageId;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId: targetPageId, text: newComment }),
      });

      const data = await res.json();
      if (data.success) {
        setComments([data.data, ...comments]);
        if (mode === "compact") {
          setSuccessMessage("Thanks for your feedback!");
          setTimeout(() => setSuccessMessage(""), 3000);
        }
        setNewComment("");
      }
    } catch (error) {
      console.error("[Comments-handleAddComment] Error adding comment:", error);
    }
  };

  const handleEditComment = async (id: string) => {
    if (!editText.trim()) return;

    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: editText }),
      });

      const data = await res.json();
      if (data.success) {
        setComments(comments.map((c) => (c._id === id ? data.data : c)));
        setEditingId(null);
        setEditText("");
      }
    } catch (error) {
      console.error(
        "[Comments-handleEditComment] Error editing comment:",
        error
      );
    }
  };

  const handleDeleteClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCommentToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!commentToDelete) return;

    try {
      const res = await fetch(`/api/comments/${commentToDelete}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        setComments(comments.filter((c) => c._id !== commentToDelete));
      }
    } catch (error) {
      console.error("[Comments-confirmDelete] Error deleting comment:", error);
    } finally {
      setDeleteModalOpen(false);
      setCommentToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setCommentToDelete(null);
  };

  const startEdit = (comment: Comment) => {
    setEditingId(comment._id);
    setEditText(comment.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const getPageLabel = (pageId: string) => {
    return PAGE_OPTIONS.find((p) => p.value === pageId)?.label || pageId;
  };

  const filteredComments =
    mode === "default" ? comments : comments.filter((c) => c.pageId === pageId);

  if (loading) {
    return (
      <div
        className={mode === "default" ? "max-w-4xl mx-auto px-6 py-12" : "p-4"}
      >
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  if (mode === "compact") {
    return (
      <div className="mt-4 pt-4 border-t border-slate-100">
        {successMessage ? (
          <p className="text-green-600 text-sm font-medium text-center py-2">
            {successMessage}
          </p>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Leave a comment..."
              className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddComment();
                }
              }}
            />
            <button
              type="button"
              onClick={handleAddComment}
              className="px-3 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Send
            </button>
          </div>
        )}
      </div>
    );
  }

  if (mode === "side-panel") {
    return (
      <div className="flex flex-col h-full max-h-[400px]">
        <h3 className="text-lg font-medium mb-4">Comments</h3>

        {/* Scrollable Comment List */}
        <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-3 min-h-[200px]">
          {filteredComments.length === 0 ? (
            <p className="text-slate-400 text-sm italic">N/A</p>
          ) : (
            filteredComments.map((comment) => (
              <div
                key={comment._id}
                className="bg-slate-50 p-3 rounded-md border border-slate-100 group"
              >
                {editingId === comment._id ? (
                  <div className="space-y-2">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full px-2 py-1 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 min-h-[60px]"
                    />
                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded hover:bg-slate-300 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleEditComment(comment._id)}
                        className="px-2 py-1 bg-slate-900 text-white text-xs rounded hover:bg-slate-800 transition-colors"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-start gap-2">
                      <p className="text-slate-700 text-sm mb-1 flex-1 break-words">
                        {comment.text}
                      </p>
                      <div className="flex gap-1">
                        <button
                          onClick={() => startEdit(comment)}
                          className="text-xs text-slate-400 hover:text-slate-700 p-1"
                          title="Edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => handleDeleteClick(comment._id, e)}
                          className="text-xs text-red-300 hover:text-red-600 p-1"
                          title="Delete"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </p>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div className="mt-auto">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 min-h-[80px] mb-2"
          />
          <button
            type="button"
            onClick={handleAddComment}
            className="w-full px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Post Comment
          </button>
        </div>

        <DeleteModal
          isOpen={deleteModalOpen}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Design Feedback</h2>

      {/* Add Comment Form */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Leave a Comment</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Page
            </label>
            <select
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              {PAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Comment
            </label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Enter your feedback here..."
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 min-h-[100px]"
            />
          </div>
          <button
            type="button"
            onClick={handleAddComment}
            className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors"
          >
            Add Comment
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium mb-4">
          All Comments ({comments.length})
        </h3>
        {comments.length === 0 ? (
          <p className="text-slate-500 text-sm"></p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-white border border-slate-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-2">
                    {getPageLabel(comment.pageId)}
                  </span>
                  {editingId === comment._id ? (
                    <div className="space-y-2">
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 min-h-[80px]"
                      />
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditComment(comment._id)}
                          className="px-3 py-1 bg-slate-900 text-white text-sm rounded-md hover:bg-slate-800 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-md hover:bg-slate-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-700">{comment.text}</p>
                  )}
                </div>
                {editingId !== comment._id && (
                  <div className="flex gap-2 ml-4">
                    <button
                      type="button"
                      onClick={() => startEdit(comment)}
                      className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleDeleteClick(comment._id, e)}
                      className="text-sm text-red-500 hover:text-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-400">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
