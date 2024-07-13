function PropsComponent(props) {

    console.log(props);

    return (
        <>
            <h2>Props Component</h2>

            <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Subjects: {props.subjects}</p>
                <p>Marks: {props.data.html}</p>
            </div>
        </>
    )
}

function ChildComponent() {
    return (
        <>
            <h2>Child Component</h2>
        </>
    )
}

function Child2Component() {
    return (
        <>
            <h2>Child 2 Component</h2>
        </>
    )
}

export default PropsComponent;
export { ChildComponent, Child2Component };