export const AuthLayouts = (props) => {
    const {children, title} = props;
    return (
        <>
            <div>
                <div>
                    <h1>
                        {title}
                    </h1>
                    <p>Welcome to FSW 2</p>
                </div>
                {children}
            </div>

        </>
    );
};
