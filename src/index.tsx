import { Analytics } from "@vercel/analytics/react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./index.css"
import AskPage from "@/pages/AskPage"
import NotFoundPage from "@/pages/NotFoundPage"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ask" element={<AskPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Analytics />
  </BrowserRouter>,
)
