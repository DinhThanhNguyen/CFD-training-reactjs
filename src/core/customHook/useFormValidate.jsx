import { useState } from "react";


let patternPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g
let patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let patternUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

export default function useFormValidate(initialValue, validate) {
    let [form, setForm] = useState(initialValue)
    let [error, setError] = useState({})

    function inputChange(event) {
        let inputValue = event.target.value
        let name = event.target.getAttribute('name');

        form[name] = inputValue

        setForm({ ...form })
    }

    function validateOnBlur(event) {
        if (form[event.target.getAttribute('name')].length === 0) {
            error[event.target.getAttribute('name')] = 'Trường này không được để trống'
        }
        setError({ ...error })
    }

    function deleteErrorOnInput(event) {
        error[event.target.getAttribute('name')] = ''
    }

    function submitForm() {
        let { rules, message } = validate
        let errorObject = {}

        for (let i in rules) {
            let rule = rules[i]

            if (rule.required) {
                if (!form[i]) {
                    errorObject[i] = message?.[i]?.required || 'Trường này không được để trống'
                    continue
                }
            }
            if (rule.pattern) {
                let pattern = rule.pattern
                if (pattern === 'phone') {
                    pattern = patternPhone
                }
                if (pattern === 'email') {
                    pattern = patternEmail
                }
                if (pattern === 'url') {
                    pattern = patternUrl
                }

                if (!pattern.test(form[i])) {
                    errorObject[i] = message?.[i]?.pattern || 'Trường này không đúng định dạng theo yêu cầu'
                }
            }
            if (rule.min && form[i]?.length < rule.min) {
                errorObject[i] = message?.[i]?.min || `Trường này phải dài hơn ${rule.min} kí tự`
            }
            if (rule.max && form[i]?.length > rule.max) {
                errorObject[i] = message?.[i]?.max || `Trường này không được dài hơn ${rule.max} kí tự`
            }

        }
        setError(errorObject)
        return errorObject
    }

    return {
        form,
        error,
        inputChange,
        validateOnBlur,
        deleteErrorOnInput,
        submitForm
    }
}
