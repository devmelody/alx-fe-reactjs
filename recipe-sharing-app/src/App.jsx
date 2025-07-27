import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'

import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import DeleteRecipeButton from './components/DeleteRecipeButton'


function App() {

  return (
   
    <Routes>
      <Route path='/' element={

    <>
     <AddRecipeForm />
     <RecipeList />
     <DeleteRecipeButton />
     <SearchBar />
     
     <RecommendationsList />
     <FavoritesList />
    
    </>
      } />
      <Route path='/recipe/:id' element={<RecipeDetails />} />
    </Routes>

  )
}

export default App
