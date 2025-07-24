import React, {useContext} from 'react';
import Title from "../Esignature/title.jsx";
import {ThemeContext} from "./themeContext.jsx";

function Blog() {
    const {darkMode,changeTheme} = useContext(ThemeContext)
    return (
        <>
            <div className=" absolute left-100 h-200 w-200 flex flex-col justify-center items-center shadow-info shadow-xl">

                <Title name={`My Blog with ${darkMode} theme`}/>
                <span className="absolute top-10 right-10">
                <buttn className={`${darkMode} btn btn-primary`} onClick={changeTheme}>{darkMode}</buttn>
            </span>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aut culpa earum error ex illo laboriosam magnam maxime, nam nisi nobis nostrum pariatur quia quidem repudiandae tenetur velit voluptate!</span><span>At autem distinctio dolor dolorem ea eligendi eos, eum iure laborum nisi nulla placeat quibusdam quisquam tempore temporibus voluptatibus, voluptatum! Aperiam eaque magni nesciunt quae quam quisquam tempora unde voluptatibus?</span><span>Adipisci asperiores, dicta distinctio dolore dolores esse illum incidunt inventore iste laboriosam magni nam neque nisi obcaecati officia quasi quos rerum sed, sequi ut velit vero vitae. Beatae perferendis, sapiente.</span><span>Aperiam autem cupiditate fugit molestias necessitatibus neque quis reprehenderit sapiente ut voluptates? Adipisci commodi optio quam recusandae similique sint. Aliquam aperiam corporis deleniti deserunt esse illum libero necessitatibus odit tempore?</span><span>Aliquam, animi asperiores at commodi cum distinctio eaque eius error eveniet exercitationem hic illo impedit laborum libero nesciunt nisi nulla, quam quisquam quo repellat rerum sequi suscipit tenetur unde voluptate.</span><span>Architecto quisquam, temporibus. Accusantium asperiores commodi consectetur culpa deleniti dicta dolor, ducimus ea esse expedita illum libero, molestiae nam nulla omnis perferendis quae quidem quisquam recusandae sunt totam vitae voluptatibus.</span><span>Alias architecto asperiores eum fugiat incidunt ipsam iste, iure labore mollitia neque perferendis perspiciatis quos repudiandae rerum sapiente similique soluta totam unde vel veniam! Ea in modi obcaecati repellendus suscipit.</span><span>Delectus dolorem ea tempore. Blanditiis cupiditate eum exercitationem magnam modi perferendis possimus repellendus sapiente similique, vel? Consequatur fuga magni neque nobis non numquam quos sit veritatis vero voluptatibus? Autem, fugiat!</span><span>Corporis, harum id illo ipsum repellat velit voluptas? Animi atque cupiditate ex illum mollitia natus possimus repellat rerum sequi velit! Ad deleniti eius error harum magni maxime quasi recusandae, reprehenderit.</span><span>A aperiam aspernatur beatae ducimus ipsa modi pariatur perspiciatis quam velit! Esse odio reprehenderit unde! Aspernatur beatae cumque doloribus ea, ex illum iure repellat totam veritatis. Aliquid et harum quo?</span></p>
            </div>
        </>
    );
}

export default Blog;