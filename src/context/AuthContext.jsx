import React, { createContext, Suspense, useLayoutEffect, useState, useCallback, useContext } from "react"

export const AuthContext = React.createContext(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(undefined)

  const refreshState = useCallback(async () => {
    setLoading(true)
    try {
      const request = new Promise((resolve, reject) => {
        const user = localStorage.getItem("userAuth") || ""
        const users = JSON.parse(localStorage.getItem("personas") || "[]")

        (user) ? resolve(users?.find(p => p.email === user)) : reject()
      })
    
      request.then((user) => {
        console.log(user)
        setUser(user)
        setIsAuthenticated(true)
      })

      request.catch((error) => {
        setIsAuthenticated(false)
      })
      
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }, [])

  useLayoutEffect(() => {
    refreshState()
    return () => { }
  }, [refreshState])

  const signOut = useCallback(() => {
    localStorage.removeItem("userAuth")
  }, [refreshState])

  const signIn = useCallback((email) => {
    localStorage.setItem("userAuth", email)
    const users = JSON.parse(localStorage.getItem("personas") || "[]")
    setUser(users?.find(u => u.email === email) || undefined)
    setIsAuthenticated(true)
  }, [refreshState])

  return (
    <Suspense fallback={"loading..."}>
      <AuthContext.Provider
        value={{
          isAuthenticated,
          loading,
          user,
          refreshState,
          signOut,
          signIn,
        }}
      >
        {children}
      </AuthContext.Provider>
    </Suspense>
  )
}

export const Authcontext = createContext()
