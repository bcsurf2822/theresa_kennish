import shutil
import os
import sys

src_dir = "/Users/benjamincorbett/.gemini/antigravity/brain/f35c4e41-fbd4-4e1f-ada5-8ee3e3b70d63/"
dst_dir = "/Users/benjamincorbett/code/cedesigns/theresa_kennish/public/artwork/"

files = {
    "surf_brush_1_1763679278883.png": "surf_brush_1.png",
    "surf_brush_2_1763679293271.png": "surf_brush_2.png",
    "beach_abstract_1_1763679306730.png": "beach_abstract_1.png",
    "coastal_rocks_1_1763679321498.png": "coastal_rocks_1.png"
}

log_file = "copy_log.txt"

with open(log_file, "w") as f:
    f.write("Starting copy process...\n")
    for src_name, dst_name in files.items():
        src = os.path.join(src_dir, src_name)
        dst = os.path.join(dst_dir, dst_name)
        try:
            if os.path.exists(src):
                shutil.copy2(src, dst)
                f.write(f"Successfully copied {src} to {dst}\n")
            else:
                f.write(f"Source file not found: {src}\n")
        except Exception as e:
            f.write(f"Error copying {src} to {dst}: {str(e)}\n")
    f.write("Copy process finished.\n")
