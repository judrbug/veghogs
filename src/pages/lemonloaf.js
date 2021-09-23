import React from "react"
import Layout from "../components/layout"
import Recipe from "../components/recipe"

export default function RecipePage() {
  return (
  <Layout>
    <Recipe
      title="Lemon Loaf"
      description="Tasty"
      ingredients={[{name:"flour"}]}
      steps={[{stepinfo:"This is step one"}]}
    />
  </Layout>
  );
}
