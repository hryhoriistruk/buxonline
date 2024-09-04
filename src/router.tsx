import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, SearchPage} from "./pages";
import {GenreIdPage} from "./pages/VacanciesList";
import {SearchKeyWordPage} from "./pages/SearchKeyWordPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'вакансії'}/>},
            {path: 'вакансії', element: <VacanciesPage/>},
            {path: 'вакансії/:id', element: <VacancyInfoPage/>},

                    {path:':idTypes', element:<TypeIsdPage/>}
                ]},
            {path: 'search', element: <SearchPage/>, children:[
                    {path:':searchWord', element:<SearchKeyWordPage/>}
                ]}
        ]
    }
])

export {router}
