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

### [React hook form](https://www.react-hook-form.com/)

#### First feelings

Stats:

- First stable since 2019 https://github.com/react-hook-form/react-hook-form/releases/tag/v1.0.0
- 35k stars on github
- 1 active issue
- 10 active PR
- 266 contributors
- youtube channel: https://www.youtube.com/@bluebill1049
- 7.57 kb gzip + @hookform/resolvers/zod 1kb
- zero dependencies (using npm view) or you can use http://npm.anvaka.com/#/view/2d/react-hook-form

Advanced features:

- you can build your own inputs and connect them with functions from react hook form.

#### Performance

Hard to validate performance. But the lib is providing a devtool extension to evaluate the performance of your forms. https://www.react-hook-form.com/dev-tools/

the component are render when loading. But it doesnt re render on clicking nor typing or send

#### Accessibility

The library is providing some example with accessbility improvment in the form. It doesn't give you much more but its fine as it sounds better for the app to handle accessibliity the way they want. But appreciate the few examples.

#### Dev experience

So far the dev experience was great. Fast setup and working example. The lib was build from start using typescript so every examples are really clear and use clear typescript features.

- [Form builder with a GUI](https://www.react-hook-form.com/form-builder/). Interesting but don't show advanced pattern like email if you start from 0 on the form builder.
- examples come with some good accessibility examples
- The doc is well structured and have a lot of advanced pattern examples to work with.
- A lot of code example cookbook on their github https://github.com/react-hook-form/react-hook-form/tree/master/examples
- The lib is giving you resolver to use a lot of validation schema tools like yup, zod etc

Last point the fact they have their own youtube channel is a great tool for dev experience. We all love live coding videos.

### [Formik](https://formik.org/)

#### First feelings

Stats:

- Re created project or forks ? https://github.com/jaredpalmer/formik/releases/tag/formik-native%402.1.24
- 32k stars on github
- 649 active issue
- 122 active PR
- 418 contributors
- 13 kb gzipped
- dependencies: (using npm view) or you can use http://npm.anvaka.com/#/view/2d/formik
  - deepmerge: ^2.1.1
  - lodash-es: ^4.17.21
  - react-fast-compare: ^2.0.1
  - tslib: ^1.10.0
  - hoist-non-react-statics: ^3.3.0
  - lodash: ^4.17.21
  - tiny-warning: ^1.0.2

Advanced features:

- you can build your own inputs and connect them with functions from react hook form.

#### Performance

At no time the doc is speaking about performance. But looking at the useEffect:

- It renders on the first load.
- It render when clicking on an input
- clicking anytime user is typing as many inputs as we have

It looks like we can do some optimization but it requires more work as you need apparently to use something like FastField.
Its not "performant" by default.

#### Accessibility

The components given by the lib like label doesn't provide enough props or override to handle properly accessiblity.
You will have to use the later doc that showing the same way how react-hook-form is doing if you want to provide proper accessibility.

#### Dev experience

- The doc is first showing a bit incomprehensive examples and without following the "best usage". They show you that
  you can use their components. But slowly move to a react-hook-form approach.
- I was a bit annoyed to be block to use only `yup` validation to validate the schema of the datas

Their examples don't start with typescript in mind nor speaking about performance

Outside of communities effort there is not videos from their side.

## Conclusion

I didn't use any of them until now. So I am not aware of what it was "before". But `Formik` kind of hide what it was before with their release history. That make me think that they tried to totally rewrite/think what they had done.

Here some notes / feelings that are important to me:

- Formik is not performant by default and components they provide don't handle well accessibility.
- It feels like they followed what `react-hook-form` to design their apis but without handling the performance in mind still.
- The doc on `react-hook-form` is better structured and make you available to work on it incrementally and follow what they define as "best practices".
- I really love that `react-hook-form` have created videos with live coding session.
- `react-hook-form` make sure you understand what consideration you need to take for accessibility
- I am a bit concerned about the only one issue on `react-hook-form`. But its probably because their api is way more smaller than `formik` with their gigantic object state.
- using the pre-build `formik` components are a false good idea because they looks limited really fast and I didn't feel it was giving any clarity.
- I would also choose a lib with zero dependencies if possible so it will be easier to maintain in future and upgrade versions
