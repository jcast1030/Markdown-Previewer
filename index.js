marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

function App(){

    let init = "# HEADER 1 \n ## HEADER 2 \n [link](https://www.freecodecamp.org) \n `let i = 5` \n ```\n() => {}\n``` \n- list \n \n> Block quote \n**bold** \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
    const [text, setText] = React.useState(init);

    

    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea
                name="text"
                id="editor"
                rows="10"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="textarea">
            </textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text} id="preview"/>
        </div>
    );
}

function Preview({markdown}) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer})
            }}
            id="preview"
        >

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
