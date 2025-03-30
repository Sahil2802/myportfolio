import { createContext, useState, useEffect } from 'react'

export const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offset = element.offsetTop - 100

                    if (scrollPosition >= offset && scrollPosition < offset + element.offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <ScrollContext.Provider value={{ activeSection }}>
            {children}
        </ScrollContext.Provider>
    )
} 