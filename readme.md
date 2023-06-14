## Context

At work we had the question what form lib we wanted to use. Both formik and react-hook-form came in the discussion.

As we want to avoid having inconsistency across apps and having a form library that will answer multiple points:

- Performance
- Accessibility
- Dev experience

## How

Disclaimer: I have no experience with both of the lib. So I will give here my honest and objective feedback.

I will first ask chat gpt and see if what it says is align with the reality.

I am going to create a basic form with email and password with those requirements:

- email should be a gmail account
- password should be at least 8 characters
- I want to use a fully typescript support
- I would like to navigate using only my keyboard for accessbility
- I want to enjoy the dev experience using them

### Chat gpt comments

Performance:

- Formik: Formik is built on top of React's component architecture, which can result in additional render cycles. It uses a render-prop pattern, which can cause more re-renders in complex forms.
- react-hook-form: react-hook-form utilizes an uncontrolled form approach and relies on fewer re-renders. It optimizes performance by minimizing unnecessary updates and re-renders.

Accessibility:

- Formik: Formik provides basic accessibility features out of the box, such as support for HTML5 form validation attributes. However, additional effort may be required to ensure complete accessibility compliance.
- react-hook-form: react-hook-form emphasizes accessibility and provides built-in features for handling accessibility requirements, such as proper form labeling, error messages, and aria attributes.

Developer Experience:

- Formik: Formik offers a higher-level API that simplifies form handling and validation. It provides intuitive form state management, error handling, and form submission, making it easier for developers to work with.
- react-hook-form: react-hook-form follows a minimalist approach, offering a smaller API surface and fewer built-in components. It aims to provide better performance and flexibility by giving developers more control over form handling and validation.

Additionally, here are a few considerations to keep in mind:
Formik has been around for a longer time and has a larger community and ecosystem. It provides more documentation, tutorials, and community support.
react-hook-form is a relatively newer library but has gained popularity for its performance optimizations and simplicity.
Both libraries have good TypeScript support, but react-hook-form has a stronger emphasis on TypeScript and provides better type inference.
Ultimately, the choice between Formik and react-hook-form depends on your specific project requirements, preferences, and the trade-offs you are willing to make. It's worth exploring the documentation, examples, and community resources of both libraries to determine which one better suits your needs.

### React hook form

#### First feelings

- documentation:

- relative experience:

#### Performance

#### Accessibility

#### Dev experience

### Formik

#### First feelings

- documentation:

- relative experience:

#### Performance

#### Accessibility

#### Dev experience
