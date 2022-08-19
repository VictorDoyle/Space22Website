import { useEffect } from 'react'

export default function useDarkTheme() {
    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(22 22 29)';
        document.body.style.color = 'white';
        return () => {
        document.body.style.backgroundColor = '#EEEAEA';
        document.body.style.color = 'black';
        }
    })
}

