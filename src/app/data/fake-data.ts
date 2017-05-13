import { IStory } from "app/shared/story/story.component";
import { IProduct } from "app/shared/product/product.component";

/**
 * A list of story model objects
 */
export const STORIES: IStory[] = [
    {
      id:1,
      title:'Buiding Bootstrap site in a weekend',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img6.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img1.jpg'
    },
    {
      id:2,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img6.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img2.jpg'
    },
    {
      id:3,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img6.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img3.jpg'
    },
    {
      id:4,
      title:'Buiding Bootstrap site in a weekend',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img7.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img1.jpg'
    },
    {
      id:5,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img2.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img2.jpg'
    },
    {
      id:6,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img9.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img3.jpg'
    },
    {
      id:7,
      title:'Buiding Bootstrap site in a weekend',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img2.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img4.jpg'
    },
    {
      id:8,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img4.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img5.jpg'
    },
    {
      id:9,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:`<p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>
      <ul class="icon-list">
        <li><span class="glyphicon glyphicon-fire"></span> eu pulvinar magna egestas.</li>
        <li><span class="glyphicon glyphicon-tint"></span> roin et elit scelerisque, egestas ligula vitae, feugiat mi.</li>
        <li><span class="glyphicon glyphicon-leaf"></span> Fusce sed libero sit amet sapien rutrum venenatis.</li>
        <li><span class="glyphicon glyphicon-bell"></span> Morbi pretium massa ut neque malesuada.</li>
      </ul>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <figure>
        <img src="assets/images/img6.jpg" alt="" class="img-responsive">
        <figcaption>Image caption</figcaption>
      </figure>
        </div>
        <div class="col-sm-8"><p>Nunc in varius felis, at molestie mauris. In id mi eu arcu congue vestibulum. Cras sed lobortis ligula. Quisque vitae lorem dapibus, euismod dolor sit amet, laoreet quam. <br>Integer vehicula, velit vel ornare facilisis, mauris risus posuere orci, eget lobortis metus tortor et quam. Nam sit amet tincidunt risus, ut pellentesque risus. Sed vel porttitor ante, et luctus dolor. Proin et elit scelerisque, egestas ligula vitae, feugiat mi. Morbi pretium massa ut neque malesuada rhoncus. Fusce sed libero sit amet sapien rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        
        <p>Etiam aliquam sapien id accumsan cursus. Nunc ac molestie quam. In varius erat nibh, id consequat nisi pharetra sit amet. Vivamus vulputate neque eget tellus accumsan, vitae porttitor eros rutrum. Donec imperdiet leo non ex pulvinar, eu gravida arcu viverra. Integer nisi ligula, accumsan non ex eu, luctus laoreet erat. Cras bibendum convallis dolor non pharetra. Vivamus tincidunt turpis ante, in egestas est semper at.</p>
        </div>
      </div>
      <hr>
      <p>Sed sollicitudin quis turpis quis tempor. Nunc ut ultrices lorem. Curabitur rhoncus vulputate metus ut pellentesque. Nulla facilisi. Mauris pellentesque scelerisque tortor, sit amet pharetra urna mollis eget. Duis ut consequat urna. Suspendisse tincidunt est nisl, id cursus sem cursus eu. Maecenas mollis felis eget quam ullamcorper, eu pulvinar magna egestas. Mauris sed felis volutpat, finibus dui id, fermentum mi. </p>`,
      imageURL:'/assets/images/img8.jpg'
    }
  ];

/**
 * A list of product model objects
 */
export const PRODUCTS: IProduct[] = [
    {
      id:1,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img4.jpg',
      rating:3,
      reviews:5
    },
    {
      id:2,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img5.jpg',
      rating:5,
      reviews:1
    },
    {
      id:3,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img6.jpg',
      rating:1.5,
      reviews:3
    },
    {
      id:4,
      title:'Picture',
      description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
      price: 1.99,
      imageURL: '/assets/images/img7.jpg',
      rating:3,
      reviews:12
    }
  ];

/**
 * Another list of story model objects, we will use it on our 'other topics' section
 */
export const OTHER_STORIES: IStory[] = [
    {
      id:1,
      title:'Buiding Bootstrap site in a weekend',
      subtitle:'Today story talks about blah... blah...',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img1.jpg'
    },
    {
      id:2,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img2.jpg'
    },
    {
      id:3,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img3.jpg'
    },
    {
      id:4,
      title:'Buiding Bootstrap site in a weekend',
      subtitle:'Today story talks about blah... blah...',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img4.jpg'
    },
    {
      id:5,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img5.jpg'
    },
    {
      id:6,
      title:'Buiding Angular2 app',
      subtitle:'Today story talks about blah... blah...',
      content:'Today story talks about blah... blah...',
      imageURL:'/assets/images/img6.jpg'
    }
  ];