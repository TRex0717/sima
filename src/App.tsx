import { BasePage } from "./pages/basePage.template"
import { Route, Routes } from "react-router-dom"
import { CoursesGeneralPage } from "./pages/courses/coursesGeneral.template"
import { HomePage } from "./pages/home/home.template";

export const App = () => {
   return (
    <>
      <BasePage />
      <Routes>
        {/* Layout principal */}
        <Route path="" element={<HomePage />}/>
        <Route path="cursos" element={<CoursesGeneralPage />} />
      </Routes>
    </>
  );
}