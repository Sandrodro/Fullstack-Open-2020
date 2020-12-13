import { useState } from "react"

export const useField = name => {
    const [value, setValue] = useState("");

    const onChange = e => {
        setValue(e.target.value)
    }

    const onClick = () => {
        document.querySelector("#form").reset()
    }

    return {
        name, onChange, value, onClick
    }
}