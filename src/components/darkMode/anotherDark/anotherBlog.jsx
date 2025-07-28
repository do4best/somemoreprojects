import React, {useContext} from 'react';
import {ThemeContext,themes} from "./theme-context.js";

function AnotherBlog(props) {
    const {darkMode,changeTheme}  = useContext(ThemeContext)
    return (
        <>

            <div className=" absolute left-100 mt-5 h-100 w-100 shadow-orange-900 shadow-lg">

                <h1 className={"text-secondary text-xl text-center mt-5"}>Now the Theme is {darkMode}</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo nisi placeat quibusdam repellat suscipit ullam voluptate voluptatum! Accusantium aspernatur aut blanditiis consectetur consequatur cupiditate dolor dolore dolores enim eos esse expedita hic id, impedit ipsa iusto, labore laboriosam modi, nobis odio possimus qui sapiente tempora tenetur voluptas voluptatem voluptatibus. Aliquid modi repudiandae suscipit. Doloremque iste minima molestias nihil similique. Accusantium, ad animi aspernatur culpa cum dolorem doloribus ducimus ea, eligendi et facere fugiat illo incidunt iusto mollitia nesciunt officiis praesentium quaerat sint sit! Alias debitis eveniet exercitationem impedit quis quod! Aliquam et eveniet expedita nisi obcaecati officia perferendis temporibus.</p>
                <button className="btn btn-success fixed top-5 right-220" onClick={changeTheme} >{darkMode}</button>
            </div>
        </>
    );
}

export default AnotherBlog;