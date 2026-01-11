"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreateCategoryForm } from "./CreateCategoryForm"
import { AddToExistingCategory } from "./AddToExistingCategory"

export function ImageUploadSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Image Upload</h2>

      <Tabs defaultValue="new-category" className="w-full">
        <TabsList className="bg-secondary border border-border p-1">
          <TabsTrigger
            value="new-category"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Create New Category
          </TabsTrigger>
          <TabsTrigger
            value="existing-category"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Add to Existing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="new-category" className="mt-4">
          <CreateCategoryForm />
        </TabsContent>

        <TabsContent value="existing-category" className="mt-4">
          <AddToExistingCategory />
        </TabsContent>
      </Tabs>
    </section>
  )
}
