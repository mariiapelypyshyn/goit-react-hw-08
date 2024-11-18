import * as Yup from 'yup';

export const PhoneNumberRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const AddContactSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").max(20, "Name must be less than 20 characters").required("Name is required"),
    number: Yup.string().min(3, "Phone must be at least 3 characters").max(13, "Phone must be less than 13 characters").required("Number is required").matches(PhoneNumberRegex, 'Invalid phone number. Phone must be +380XXXXXXXXX'),
})

export const RegisterUserSchema = Yup.object({
    name: Yup.string().min(3, "Name length must be at least 3 characters").max(20, "Name must be less than 20 characters").required("Name is required"),
    email: Yup.string().email("Invalid email adress").required("Email is required"),
    password: Yup.string().min(7, "Password length must be at least 7 characters").max(20, "Password length must be less than 20 characters").required("Password is required"),
})

export const LoginUserSchema = Yup.object({
    email: Yup.string().email("Invalid email adress").required("Email is required"),
    password: Yup.string().min(7, "Password length must be at least 7 characters").max(20, "Password length must be less than 20 characters").required("Password is required"),
})