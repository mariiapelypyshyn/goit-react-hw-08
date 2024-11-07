import * as Yup from 'yup';

export const PhoneNumberRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const AddContactSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters").required("Name is required"),
    number: Yup.string().min(3, "Phone must be at least 3 characters").max(50, "Phone must be less than 50 characters").required("Number is required").matches(PhoneNumberRegex, 'Invalid phone number. Phone must be +380XXXXXXXXX'),
})