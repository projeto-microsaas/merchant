import { Toaster } from "./components/ui/toaster";
     import { Toaster as Sonner } from "./components/ui/sonner";
     import { TooltipProvider } from "./components/ui/tooltip";
     import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
     import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
     import Index from "./pages/Index";
     import Dashboard from "./pages/Dashboard";
     import NotFound from "./pages/NotFound";

     const queryClient = new QueryClient();

     const ProtectedRoute = ({ children }) => {
       const token = localStorage.getItem("authToken");
       console.log('Verificando token no ProtectedRoute:', token);
       if (!token) {
         console.log('Token não encontrado, redirecionando para /');
         return <Navigate to="/" replace />;
       }
       return children;
     };

     const App = () => (
       <QueryClientProvider client={queryClient}>
         <TooltipProvider>
           <Toaster />
           <Sonner />
           <BrowserRouter>
             <Routes>
               <Route path="/" element={<Index />} />
               <Route
                 path="/dashboard"
                 element={
                   <ProtectedRoute>
                     <Dashboard />
                   </ProtectedRoute>
                 }
               />
               <Route path="*" element={<NotFound />} />
             </Routes>
           </BrowserRouter>
         </TooltipProvider>
       </QueryClientProvider>
     );

     export default App;
