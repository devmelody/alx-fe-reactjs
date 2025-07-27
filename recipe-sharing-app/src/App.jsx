import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'


function App() {

  return (
   
    <Routes>
      <Route path='/' element={

    <>
     <AddRecipeForm />
     <RecipeList />
    </>
      } />
      <Route path='/recipe/:id' element={<RecipeDetails />} />
    </Routes>

  )
}

export default App
