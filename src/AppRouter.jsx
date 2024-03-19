export default function AppRouter() {

  return (
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/boards/:boardId" element={<Board/>}/>
                    <Route path="/posts/:postId" element={<Board/>}/>
                </Routes>
            </div>
        </Router>
    </>
  )
}
