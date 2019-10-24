const cheerio = require('cheerio')
const $ = cheerio.load(`<div id="entries"><div class="entry">
<a href="/cubby_view.html?entryid=14802270&amp;saveit=Yes" class="preview"><span id="img-wrapper-5452358"><img data-info="5452358-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQ-4NStfeFei" id="img5452358" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14802270"></a><a class="title" href="/cubby_view.html?entryid=14802270&amp;saveit=Yes">07/16/18</a><br><b></b><br>relaxing after outside <a class="info" href="/cubby_view.html?entryid=14802270&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14800326&amp;saveit=Yes" class="preview"><span id="img-wrapper-5451123"><img data-info="5451123-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQ-7NyxUeFei" id="img5451123" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14800326"></a><a class="title" href="/cubby_view.html?entryid=14800326&amp;saveit=Yes">07/16/18</a><br><b></b><br>discussing fruits and veggies <a class="info" href="/cubby_view.html?entryid=14800326&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14799650&amp;saveit=Yes" class="preview"><span id="img-wrapper-5450901"><img data-info="5450901-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQ-6Py5WeFei" id="img5450901" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14799650"></a><a class="title" href="/cubby_view.html?entryid=14799650&amp;saveit=Yes">07/16/18</a><br><b></b><br>waiting very patiently for circle time <a class="info" href="/cubby_view.html?entryid=14799650&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14805991&amp;saveit=Yes" class="preview"><span id="img-wrapper-5456892"><img data-info="5456892-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQ-8PidVeFei" id="img5456892" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14805991"></a><a class="title" href="/cubby_view.html?entryid=14805991&amp;saveit=Yes">Art for 07/13/18</a><br><b>making an octopus</b> <a class="info" href="/cubby_view.html?entryid=14805991&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14805948&amp;saveit=Yes" class="preview"><span id="img-wrapper-5456818"><img data-info="5456818-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQ-8Pi9feFei" id="img5456818" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14805948"></a><a class="title" href="/cubby_view.html?entryid=14805948&amp;saveit=Yes">Science, Sensory for 07/13/18</a><br><b>Zebra friends found a cicada</b> <a class="info" href="/cubby_view.html?entryid=14805948&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14802037&amp;saveit=Yes" class="preview"><span id="img-wrapper-5452215"><img data-info="5452215-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQ-4NC9SeFei" id="img5452215" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14802037"></a><a class="title" href="/cubby_view.html?entryid=14802037&amp;saveit=Yes">Approaches to Learning / Cognitive for 07/13/18</a><br><b>sitting on the carpet waiting for circle time</b> <a class="info" href="/cubby_view.html?entryid=14802037&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14761676&amp;saveit=Yes" class="preview"><span id="img-wrapper-5439124"><img data-info="5439124-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQmzNyxTeFei" id="img5439124" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14761676"></a><a class="title" href="/cubby_view.html?entryid=14761676&amp;saveit=Yes">Art for 07/12/18</a><br><b>hanging at the beach coloring</b> <a class="info" href="/cubby_view.html?entryid=14761676&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14738140&amp;saveit=Yes" class="preview"><span id="img-wrapper-5429507"><img data-info="5429507-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQizMy5QeFei" id="img5429507" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14738140"></a><a class="title" href="/cubby_view.html?entryid=14738140&amp;saveit=Yes">Fine Motor for 07/11/18</a><br><b>very focused</b> <a class="info" href="/cubby_view.html?entryid=14738140&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14719837&amp;saveit=Yes" class="preview"><span id="img-wrapper-5422044"><img data-info="5422044-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQi4NipTeFei" id="img5422044" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14719837"></a><a class="title" href="/cubby_view.html?entryid=14719837&amp;saveit=Yes">Music for 07/10/18</a><br><b>singing Tiny Turtle</b> <a class="info" href="/cubby_view.html?entryid=14719837&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14719425&amp;saveit=Yes" class="preview"><span id="img-wrapper-5421905"><img data-info="5421905-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQi7Py5SeFei" id="img5421905" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14719425"></a><a class="title" href="/cubby_view.html?entryid=14719425&amp;saveit=Yes">Art, Science, Sensory for 07/10/18</a><br><b>painting his jellyfish</b> <a class="info" href="/cubby_view.html?entryid=14719425&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14704529&amp;saveit=Yes" class="preview"><span id="img-wrapper-5418533"><img data-info="5418533-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQuyMy1UeFei" id="img5418533" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14704529"></a><a class="title" href="/cubby_view.html?entryid=14704529&amp;saveit=Yes">Language / Vocal Communication, Print Literacy Development, Social / Emotional for 07/09/18</a><br><b>Polar Bear friends came and read to us!</b> <a class="info" href="/cubby_view.html?entryid=14704529&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14670899&amp;saveit=Yes" class="preview"><span id="img-wrapper-5406596"><img data-info="5406596-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQq8MydReFei" id="img5406596" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14670899"></a><a class="title" href="/cubby_view.html?entryid=14670899&amp;saveit=Yes">Large Motor, Science, Sensory for 07/05/18</a><br><b>running up the hill to look at nature</b> <a class="info" href="/cubby_view.html?entryid=14670899&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14670889&amp;saveit=Yes" class="preview"><span id="img-wrapper-5406591"><img data-info="5406591-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQq8MydWeFei" id="img5406591" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14670889"></a><a class="title" href="/cubby_view.html?entryid=14670889&amp;saveit=Yes">Art for 07/05/18</a><br><b>our splatter painting fireworks</b> <a class="info" href="/cubby_view.html?entryid=14670889&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14670875&amp;saveit=Yes" class="preview"><span id="img-wrapper-5406570"><img data-info="5406570-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQq8MylXeFei" id="img5406570" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14670875"></a><a class="title" href="/cubby_view.html?entryid=14670875&amp;saveit=Yes">Art for 07/05/18</a><br><b>splatter painting</b> <a class="info" href="/cubby_view.html?entryid=14670875&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14665658&amp;saveit=Yes" class="preview"><span id="img-wrapper-5401726"><img data-info="5401726-90-0" src="https://www.lifecubby.me/i/rmrmJYwCaQq7MSxReFei" id="img5401726" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14665658"></a><a class="title" href="/cubby_view.html?entryid=14665658&amp;saveit=Yes">07/05/18</a><br><b></b><br>writing boards <a class="info" href="/cubby_view.html?entryid=14665658&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14654129&amp;saveit=Yes" class="preview"><span id="img-wrapper-5399424"><img data-info="5399424-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgOzMixTeFei" id="img5399424" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14654129"></a><a class="title" href="/cubby_view.html?entryid=14654129&amp;saveit=Yes">Approaches to Learning / Cognitive, Music for 07/03/18</a><br><b>Music Time!!!</b> <a class="info" href="/cubby_view.html?entryid=14654129&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14653168&amp;saveit=Yes" class="preview"><span id="img-wrapper-5398006"><img data-info="5398006-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgOyNi5ReFei" id="img5398006" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14653168"></a><a class="title" href="/cubby_view.html?entryid=14653168&amp;saveit=Yes">Dramatic Play for 07/03/18</a><br><b>making monkies in a row</b> <a class="info" href="/cubby_view.html?entryid=14653168&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14653150&amp;saveit=Yes" class="preview"><span id="img-wrapper-5397973"><img data-info="5397973-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgO9PylUeFei" id="img5397973" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14653150"></a><a class="title" href="/cubby_view.html?entryid=14653150&amp;saveit=Yes">Art, Science, Social / Emotional, Sensory for 07/03/18</a><br><b>having fun making fireworks</b> <a class="info" href="/cubby_view.html?entryid=14653150&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14653133&amp;saveit=Yes" class="preview"><span id="img-wrapper-5397944"><img data-info="5397944-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgO9PypTeFei" id="img5397944" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14653133"></a><a class="title" href="/cubby_view.html?entryid=14653133&amp;saveit=Yes">Art, Sensory for 07/03/18</a><br><b>painting fireworks</b> <a class="info" href="/cubby_view.html?entryid=14653133&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14613355&amp;saveit=Yes" class="preview"><span id="img-wrapper-5380642"><img data-info="5380642-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgK6MCpVeFei" id="img5380642" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14613355"></a><a class="title" href="/cubby_view.html?entryid=14613355&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Social / Emotional for 06/29/18</a><br><b>circle time!!!</b> <a class="info" href="/cubby_view.html?entryid=14613355&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14600616&amp;saveit=Yes" class="preview"><span id="img-wrapper-5378571"><img data-info="5378571-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbg2yMylWeFei" id="img5378571" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14600616"></a><a class="title" href="/cubby_view.html?entryid=14600616&amp;saveit=Yes">Health / Safety / Nutrition, Social / Emotional for 06/28/18</a><br><b>Enjoying our special snack for our friend's last day!</b> <a class="info" href="/cubby_view.html?entryid=14600616&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14580993&amp;saveit=Yes" class="preview"><span id="img-wrapper-5370989"><img data-info="5370989-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbg26PyZeeFei" id="img5370989" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14580993"></a><a class="title" href="/cubby_view.html?entryid=14580993&amp;saveit=Yes">Art, Health / Safety / Nutrition for 06/27/18</a><br><b>yum</b> <a class="info" href="/cubby_view.html?entryid=14580993&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14580959&amp;saveit=Yes" class="preview"><span id="img-wrapper-5370938"><img data-info="5370938-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbg26Py1feFei" id="img5370938" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14580959"></a><a class="title" href="/cubby_view.html?entryid=14580959&amp;saveit=Yes">Art, Health / Safety / Nutrition, Sensory for 06/27/18</a><br><b>making a healthy snack</b> <a class="info" href="/cubby_view.html?entryid=14580959&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14539342&amp;saveit=Yes" class="preview"><span id="img-wrapper-5353406"><img data-info="5353406-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbg-5Mi5ReFei" id="img5353406" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14539342"></a><a class="title" href="/cubby_view.html?entryid=14539342&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 06/25/18</a><br><b>listening at circle time</b> <a class="info" href="/cubby_view.html?entryid=14539342&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14517958&amp;saveit=Yes" class="preview"><span id="img-wrapper-5344194"><img data-info="5344194-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbg6-NydTeFei" id="img5344194" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14517958"></a><a class="title" href="/cubby_view.html?entryid=14517958&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 06/22/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=14517958&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14499992&amp;saveit=Yes" class="preview"><span id="img-wrapper-5337132"><img data-info="5337132-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgm9Ny1VeFei" id="img5337132" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14499992"></a><a class="title" href="/cubby_view.html?entryid=14499992&amp;saveit=Yes">Art for 06/21/18</a><br><b>making turtles</b> <a class="info" href="/cubby_view.html?entryid=14499992&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14477976&amp;saveit=Yes" class="preview"><span id="img-wrapper-5327724"><img data-info="5327724-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgi9MSxTeFei" id="img5327724" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14477976"></a><a class="title" href="/cubby_view.html?entryid=14477976&amp;saveit=Yes">Art for 06/20/18</a><br><b>making a monkey</b> <a class="info" href="/cubby_view.html?entryid=14477976&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14457442&amp;saveit=Yes" class="preview"><span id="img-wrapper-5320137"><img data-info="5320137-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgi6Ny1QeFei" id="img5320137" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14457442"></a><a class="title" href="/cubby_view.html?entryid=14457442&amp;saveit=Yes">Art for 06/19/18</a><br><b>making leaves for our jungle</b> <a class="info" href="/cubby_view.html?entryid=14457442&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14442983&amp;saveit=Yes" class="preview"><span id="img-wrapper-5318415"><img data-info="5318415-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbguyMi9SeFei" id="img5318415" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14442983"></a><a class="title" href="/cubby_view.html?entryid=14442983&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 06/18/18</a><br><b>burning off some steam since it's too hot to go outside.</b> <a class="info" href="/cubby_view.html?entryid=14442983&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14436464&amp;saveit=Yes" class="preview"><span id="img-wrapper-5312428"><img data-info="5312428-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbgu4MixfeFei" id="img5312428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14436464"></a><a class="title" href="/cubby_view.html?entryid=14436464&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 06/18/18</a><br><b>Singing days of the week with Ms. Melissa</b> <a class="info" href="/cubby_view.html?entryid=14436464&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14383611&amp;saveit=Yes" class="preview"><span id="img-wrapper-5296584"><img data-info="5296584-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwO8MyZTeFei" id="img5296584" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14383611"></a><a class="title" href="/cubby_view.html?entryid=14383611&amp;saveit=Yes">Approaches to Learning / Cognitive for 06/13/18</a><br><b>waiting in line to go outside</b> <a class="info" href="/cubby_view.html?entryid=14383611&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14383597&amp;saveit=Yes" class="preview"><span id="img-wrapper-5296569"><img data-info="5296569-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwO8MyheeFei" id="img5296569" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14383597"></a><a class="title" href="/cubby_view.html?entryid=14383597&amp;saveit=Yes">English Learner Development, Social / Emotional for 06/13/18</a><br><b>listening to a story</b> <a class="info" href="/cubby_view.html?entryid=14383597&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14316662&amp;saveit=Yes" class="preview"><span id="img-wrapper-5269928"><img data-info="5269928-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwyzPyxfeFei" id="img5269928" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14316662"></a><a class="title" href="/cubby_view.html?entryid=14316662&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 06/08/18</a><br><b>Story Time with Friends</b> <a class="info" href="/cubby_view.html?entryid=14316662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14303078&amp;saveit=Yes" class="preview"><span id="img-wrapper-5268550"><img data-info="5268550-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwyyMytXeFei" id="img5268550" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14303078"></a><a class="title" href="/cubby_view.html?entryid=14303078&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional, Sensory for 06/07/18</a><br><b>eating 4 o'clock snack</b> <a class="info" href="/cubby_view.html?entryid=14303078&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14302874&amp;saveit=Yes" class="preview"><span id="img-wrapper-5268275"><img data-info="5268275-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwyyNClSeFei" id="img5268275" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14302874"></a><a class="title" href="/cubby_view.html?entryid=14302874&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 06/07/18</a><br><b>coloring dinos</b> <a class="info" href="/cubby_view.html?entryid=14302874&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14279742&amp;saveit=Yes" class="preview"><span id="img-wrapper-5258807"><img data-info="5258807-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbw-yPi5QeFei" id="img5258807" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14279742"></a><a class="title" href="/cubby_view.html?entryid=14279742&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication for 06/06/18</a><br><b>Zebra friends following directions and making a line to go inside</b> <a class="info" href="/cubby_view.html?entryid=14279742&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14231915&amp;saveit=Yes" class="preview"><span id="img-wrapper-5240593"><img data-info="5240593-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbw66MydUeFei" id="img5240593" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14231915"></a><a class="title" href="/cubby_view.html?entryid=14231915&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor, Social / Emotional for 06/04/18</a><br><b>Sitting nicely for our first circle in our new room!</b> <a class="info" href="/cubby_view.html?entryid=14231915&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14196717&amp;saveit=Yes" class="preview"><span id="img-wrapper-5231494"><img data-info="5231494-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwm7MidTeFei" id="img5231494" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14196717"></a><a class="title" href="/cubby_view.html?entryid=14196717&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/31/18</a><br><b>reading with friends</b> <a class="info" href="/cubby_view.html?entryid=14196717&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14196524&amp;saveit=Yes" class="preview"><span id="img-wrapper-5231281"><img data-info="5231281-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwm7NCZWeFei" id="img5231281" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14196524"></a><a class="title" href="/cubby_view.html?entryid=14196524&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/31/18</a><br><b>snack</b> <a class="info" href="/cubby_view.html?entryid=14196524&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14193195&amp;saveit=Yes" class="preview"><span id="img-wrapper-5227552"><img data-info="5227552-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwi9MytVeFei" id="img5227552" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14193195"></a><a class="title" href="/cubby_view.html?entryid=14193195&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 05/31/18</a><br><b>reading books before lunch</b> <a class="info" href="/cubby_view.html?entryid=14193195&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14192232&amp;saveit=Yes" class="preview"><span id="img-wrapper-5227004"><img data-info="5227004-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwi9Ni5TeFei" id="img5227004" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14192232"></a><a class="title" href="/cubby_view.html?entryid=14192232&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/31/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=14192232&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14170312&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="14170312"></a><a class="title" href="/cubby_view.html?entryid=14170312&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/30/18</a><br><b>bike fun</b> <a class="info" href="/cubby_view.html?entryid=14170312&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14168602&amp;saveit=Yes" class="preview"><span id="img-wrapper-5218833"><img data-info="5218833-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwuyPi1UeFei" id="img5218833" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14168602"></a><a class="title" href="/cubby_view.html?entryid=14168602&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/30/18</a><br><b>having fun</b> <a class="info" href="/cubby_view.html?entryid=14168602&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14154066&amp;saveit=Yes" class="preview"><span id="img-wrapper-5217458"><img data-info="5217458-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwu9MitfeFei" id="img5217458" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14154066"></a><a class="title" href="/cubby_view.html?entryid=14154066&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Language / Vocal Communication, Social / Emotional for 05/29/18</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=14154066&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14154038&amp;saveit=Yes" class="preview"><span id="img-wrapper-5217428"><img data-info="5217428-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwu9MixfeFei" id="img5217428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14154038"></a><a class="title" href="/cubby_view.html?entryid=14154038&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, English Learner Development, Language / Vocal Communication, Social / Emotional for 05/29/18</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=14154038&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14150346&amp;saveit=Yes" class="preview"><span id="img-wrapper-5213200"><img data-info="5213200-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwu5NC5XeFei" id="img5213200" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14150346"></a><a class="title" href="/cubby_view.html?entryid=14150346&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/29/18</a><br><b>playing with the lace ups</b><br>working on fine motor skills <a class="info" href="/cubby_view.html?entryid=14150346&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14148673&amp;saveit=Yes" class="preview"><span id="img-wrapper-5212255"><img data-info="5212255-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwu4NCtSeFei" id="img5212255" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14148673"></a><a class="title" href="/cubby_view.html?entryid=14148673&amp;saveit=Yes">Dramatic Play, Health / Safety / Nutrition, Language / Vocal Communication, Large Motor, Social / Emotional for 05/29/18</a><br><b></b><br>climbing and playing follow the leader <a class="info" href="/cubby_view.html?entryid=14148673&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14148520&amp;saveit=Yes" class="preview"><span id="img-wrapper-5212205"><img data-info="5212205-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwu4NC5SeFei" id="img5212205" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14148520"></a><a class="title" href="/cubby_view.html?entryid=14148520&amp;saveit=Yes">05/29/18</a><br><b></b><br>in and out run and sit over and over <a class="info" href="/cubby_view.html?entryid=14148520&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14131518&amp;saveit=Yes" class="preview"><span id="img-wrapper-5209623"><img data-info="5209623-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwqzMCxUeFei" id="img5209623" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14131518"></a><a class="title" href="/cubby_view.html?entryid=14131518&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional, Sensory for 05/25/18</a><br><b>little puzzles!!</b><br>doing puzzles together <a class="info" href="/cubby_view.html?entryid=14131518&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14129119&amp;saveit=Yes" class="preview"><span id="img-wrapper-5206847"><img data-info="5206847-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwq8PipQeFei" id="img5206847" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14129119"></a><a class="title" href="/cubby_view.html?entryid=14129119&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/25/18</a><br><b>coloring before lunch</b> <a class="info" href="/cubby_view.html?entryid=14129119&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14112516&amp;saveit=Yes" class="preview"><span id="img-wrapper-5203287"><img data-info="5203287-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbwq5NCZQeFei" id="img5203287" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14112516"></a><a class="title" href="/cubby_view.html?entryid=14112516&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/24/18</a><br><b>singing songs before snack</b> <a class="info" href="/cubby_view.html?entryid=14112516&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14109301&amp;saveit=Yes" class="preview"><span id="img-wrapper-5199838"><img data-info="5199838-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAOzPi1feFei" id="img5199838" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14109301"></a><a class="title" href="/cubby_view.html?entryid=14109301&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 05/24/18</a><br><b>reading books before lunch</b> <a class="info" href="/cubby_view.html?entryid=14109301&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14107504&amp;saveit=Yes" class="preview"><span id="img-wrapper-5198838"><img data-info="5198838-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAOyPi1feFei" id="img5198838" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14107504"></a><a class="title" href="/cubby_view.html?entryid=14107504&amp;saveit=Yes">Dramatic Play, Language / Vocal Communication, Social / Emotional, Sensory for 05/24/18</a><br><b></b><br>Sebastian is blowing us bubbles <a class="info" href="/cubby_view.html?entryid=14107504&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14105461&amp;saveit=Yes" class="preview"><span id="img-wrapper-5198321"><img data-info="5198321-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAOyNSxWeFei" id="img5198321" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14105461"></a><a class="title" href="/cubby_view.html?entryid=14105461&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/24/18</a><br><b>play time</b> <a class="info" href="/cubby_view.html?entryid=14105461&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14105331&amp;saveit=Yes" class="preview"><span id="img-wrapper-5198309"><img data-info="5198309-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAOyNS5eeFei" id="img5198309" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14105331"></a><a class="title" href="/cubby_view.html?entryid=14105331&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/24/18</a><br><b>playing with friends</b> <a class="info" href="/cubby_view.html?entryid=14105331&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14103074&amp;saveit=Yes" class="preview"><span id="img-wrapper-5198091"><img data-info="5198091-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAOyNidWeFei" id="img5198091" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14103074"></a><a class="title" href="/cubby_view.html?entryid=14103074&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/24/18</a><br><b>breakfast is yummy</b> <a class="info" href="/cubby_view.html?entryid=14103074&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14091490&amp;saveit=Yes" class="preview"><span id="img-wrapper-5197367"><img data-info="5197367-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAO9NShQeFei" id="img5197367" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14091490"></a><a class="title" href="/cubby_view.html?entryid=14091490&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/23/18</a><br><b>recess fun</b> <a class="info" href="/cubby_view.html?entryid=14091490&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14091447&amp;saveit=Yes" class="preview"><span id="img-wrapper-5197304"><img data-info="5197304-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAO9NS5TeFei" id="img5197304" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14091447"></a><a class="title" href="/cubby_view.html?entryid=14091447&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/23/18</a><br><b>recess fun</b> <a class="info" href="/cubby_view.html?entryid=14091447&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14091442&amp;saveit=Yes" class="preview"><span id="img-wrapper-5197304"><img data-info="5197304-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAO9NS5TeFei" id="img5197304" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14091442"></a><a class="title" href="/cubby_view.html?entryid=14091442&amp;saveit=Yes">05/23/18</a><br><b>recess fun</b> <a class="info" href="/cubby_view.html?entryid=14091442&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14085761&amp;saveit=Yes" class="preview"><span id="img-wrapper-5191899"><img data-info="5191899-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAO7PideeFei" id="img5191899" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14085761"></a><a class="title" href="/cubby_view.html?entryid=14085761&amp;saveit=Yes">Dramatic Play, Large Motor, Sensory for 05/23/18</a><br><b>Riding my bike!</b> <a class="info" href="/cubby_view.html?entryid=14085761&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14063020&amp;saveit=Yes" class="preview"><span id="img-wrapper-5184397"><img data-info="5184397-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAK-NSdQeFei" id="img5184397" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14063020"></a><a class="title" href="/cubby_view.html?entryid=14063020&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/22/18</a><br><b>recess fun</b> <a class="info" href="/cubby_view.html?entryid=14063020&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14062795&amp;saveit=Yes" class="preview"><span id="img-wrapper-5184282"><img data-info="5184282-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAK-NCZVeFei" id="img5184282" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14062795"></a><a class="title" href="/cubby_view.html?entryid=14062795&amp;saveit=Yes">Dramatic Play, Language / Vocal Communication, Social / Emotional for 05/22/18</a><br><b>bike fun</b> <a class="info" href="/cubby_view.html?entryid=14062795&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14062079&amp;saveit=Yes" class="preview"><span id="img-wrapper-5183946"><img data-info="5183946-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAK5PypReFei" id="img5183946" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14062079"></a><a class="title" href="/cubby_view.html?entryid=14062079&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Social / Emotional for 05/22/18</a><br><b>reading with Ms Kenzie</b> <a class="info" href="/cubby_view.html?entryid=14062079&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14040277&amp;saveit=Yes" class="preview"><span id="img-wrapper-5177530"><img data-info="5177530-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA29My1XeFei" id="img5177530" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14040277"></a><a class="title" href="/cubby_view.html?entryid=14040277&amp;saveit=Yes">05/21/18</a><br><b></b><br>resting after a run in the gym <a class="info" href="/cubby_view.html?entryid=14040277&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14039449&amp;saveit=Yes" class="preview"><span id="img-wrapper-5177310"><img data-info="5177310-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA29NS9XeFei" id="img5177310" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14039449"></a><a class="title" href="/cubby_view.html?entryid=14039449&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/21/18</a><br><b>book fun</b> <a class="info" href="/cubby_view.html?entryid=14039449&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14038759&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="14038759"></a><a class="title" href="/cubby_view.html?entryid=14038759&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 05/21/18</a><br><b>fun Monday</b> <a class="info" href="/cubby_view.html?entryid=14038759&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=14016759&amp;saveit=Yes" class="preview"><span id="img-wrapper-5170696"><img data-info="5170696-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA26MCdReFei" id="img5170696" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="14016759"></a><a class="title" href="/cubby_view.html?entryid=14016759&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Social / Emotional for 05/18/18</a><br><b>Reading with friends!</b> <a class="info" href="/cubby_view.html?entryid=14016759&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13995869&amp;saveit=Yes" class="preview"><span id="img-wrapper-5163467"><img data-info="5163467-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAy5MihQeFei" id="img5163467" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13995869"></a><a class="title" href="/cubby_view.html?entryid=13995869&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/17/18</a><br><b>washing dishes</b> <a class="info" href="/cubby_view.html?entryid=13995869&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13995222&amp;saveit=Yes" class="preview"><span id="img-wrapper-5163285"><img data-info="5163285-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAy5NCZSeFei" id="img5163285" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13995222"></a><a class="title" href="/cubby_view.html?entryid=13995222&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/17/18</a><br><b>truck fun</b> <a class="info" href="/cubby_view.html?entryid=13995222&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13975119&amp;saveit=Yes" class="preview"><span id="img-wrapper-5156731"><img data-info="5156731-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA-8MS1WeFei" id="img5156731" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13975119"></a><a class="title" href="/cubby_view.html?entryid=13975119&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 05/16/18</a><br><b>happy times on the play ground</b> <a class="info" href="/cubby_view.html?entryid=13975119&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13974970&amp;saveit=Yes" class="preview"><span id="img-wrapper-5156680"><img data-info="5156680-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA-8MCZXeFei" id="img5156680" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13974970"></a><a class="title" href="/cubby_view.html?entryid=13974970&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/16/18</a><br><b>bike and play ground fun</b> <a class="info" href="/cubby_view.html?entryid=13974970&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13974653&amp;saveit=Yes" class="preview"><span id="img-wrapper-5156560"><img data-info="5156560-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA-8MyhXeFei" id="img5156560" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13974653"></a><a class="title" href="/cubby_view.html?entryid=13974653&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/16/18</a><br><b>bike fun</b> <a class="info" href="/cubby_view.html?entryid=13974653&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13934559&amp;saveit=Yes" class="preview"><span id="img-wrapper-5146920"><img data-info="5146920-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA68PyxXeFei" id="img5146920" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13934559"></a><a class="title" href="/cubby_view.html?entryid=13934559&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 05/14/18</a><br><b>peekaboo</b><br>loving the playground <a class="info" href="/cubby_view.html?entryid=13934559&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13934458&amp;saveit=Yes" class="preview"><span id="img-wrapper-5146824"><img data-info="5146824-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA68PixTeFei" id="img5146824" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13934458"></a><a class="title" href="/cubby_view.html?entryid=13934458&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 05/14/18</a><br><b>playing with the blocks</b> <a class="info" href="/cubby_view.html?entryid=13934458&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13933698&amp;saveit=Yes" class="preview"><span id="img-wrapper-5146261"><img data-info="5146261-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA68NChWeFei" id="img5146261" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13933698"></a><a class="title" href="/cubby_view.html?entryid=13933698&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 05/14/18</a><br><b>driving bikes around this morning</b> <a class="info" href="/cubby_view.html?entryid=13933698&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13913181&amp;saveit=Yes" class="preview"><span id="img-wrapper-5141004"><img data-info="5141004-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA67Ni5TeFei" id="img5141004" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13913181"></a><a class="title" href="/cubby_view.html?entryid=13913181&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 05/11/18</a><br><b>playing with the playdoh</b> <a class="info" href="/cubby_view.html?entryid=13913181&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13912853&amp;saveit=Yes" class="preview"><span id="img-wrapper-5140772"><img data-info="5140772-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbA66MSlVeFei" id="img5140772" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13912853"></a><a class="title" href="/cubby_view.html?entryid=13912853&amp;saveit=Yes">05/11/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13912853&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13906821&amp;saveit=Yes" class="preview"><span id="img-wrapper-5135571"><img data-info="5135571-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAm_MylWeFei" id="img5135571" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13906821"></a><a class="title" href="/cubby_view.html?entryid=13906821&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 05/11/18</a><br><b>chairs are fuj</b> <a class="info" href="/cubby_view.html?entryid=13906821&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13890878&amp;saveit=Yes" class="preview"><span id="img-wrapper-5133791"><img data-info="5133791-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAm5MSdWeFei" id="img5133791" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13890878"></a><a class="title" href="/cubby_view.html?entryid=13890878&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 05/10/18</a><br><b>snack time</b> <a class="info" href="/cubby_view.html?entryid=13890878&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13885965&amp;saveit=Yes" class="preview"><span id="img-wrapper-5129532"><img data-info="5129532-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAizMy1VeFei" id="img5129532" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13885965"></a><a class="title" href="/cubby_view.html?entryid=13885965&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/10/18</a><br><b>play ground fun</b> <a class="info" href="/cubby_view.html?entryid=13885965&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13884132&amp;saveit=Yes" class="preview"><span id="img-wrapper-5128951"><img data-info="5128951-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAiyPytWeFei" id="img5128951" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13884132"></a><a class="title" href="/cubby_view.html?entryid=13884132&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 05/10/18</a><br><b>getting toys from under the table</b> <a class="info" href="/cubby_view.html?entryid=13884132&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13869400&amp;saveit=Yes" class="preview"><span id="img-wrapper-5128087"><img data-info="5128087-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAiyNiZQeFei" id="img5128087" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13869400"></a><a class="title" href="/cubby_view.html?entryid=13869400&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Language / Vocal Communication, Large Motor, Social / Emotional, Sensory for 05/09/18</a><br><b>making a scrap book</b> <a class="info" href="/cubby_view.html?entryid=13869400&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13865038&amp;saveit=Yes" class="preview"><span id="img-wrapper-5123774"><img data-info="5123774-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAi5MSlTeFei" id="img5123774" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13865038"></a><a class="title" href="/cubby_view.html?entryid=13865038&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/09/18</a><br><b>playing with the connectors before lunch</b> <a class="info" href="/cubby_view.html?entryid=13865038&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13863383&amp;saveit=Yes" class="preview"><span id="img-wrapper-5123102"><img data-info="5123102-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAi5Ny5VeFei" id="img5123102" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13863383"></a><a class="title" href="/cubby_view.html?entryid=13863383&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 05/09/18</a><br><b>bike fun</b> <a class="info" href="/cubby_view.html?entryid=13863383&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13842098&amp;saveit=Yes" class="preview"><span id="img-wrapper-5117541"><img data-info="5117541-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAu9MypWeFei" id="img5117541" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13842098"></a><a class="title" href="/cubby_view.html?entryid=13842098&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/08/18</a><br><b>circle time outside with our Monkey friends</b> <a class="info" href="/cubby_view.html?entryid=13842098&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13838928&amp;saveit=Yes" class="preview"><span id="img-wrapper-5116549"><img data-info="5116549-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAu8MypeeFei" id="img5116549" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13838928"></a><a class="title" href="/cubby_view.html?entryid=13838928&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 05/08/18</a><br><b>playing with kitchen</b> <a class="info" href="/cubby_view.html?entryid=13838928&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13824437&amp;saveit=Yes" class="preview"><span id="img-wrapper-5115573"><img data-info="5115573-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAu_MylUeFei" id="img5115573" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13824437"></a><a class="title" href="/cubby_view.html?entryid=13824437&amp;saveit=Yes">05/07/18</a><br><b>reading with shelby</b> <a class="info" href="/cubby_view.html?entryid=13824437&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13818977&amp;saveit=Yes" class="preview"><span id="img-wrapper-5110538"><img data-info="5110538-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAu6My1feFei" id="img5110538" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13818977"></a><a class="title" href="/cubby_view.html?entryid=13818977&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/07/18</a><br><b>circle time outside</b><br>taking advantage of the nice weather ! <a class="info" href="/cubby_view.html?entryid=13818977&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13797510&amp;saveit=Yes" class="preview"><span id="img-wrapper-5103968"><img data-info="5103968-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAq5PyhfeFei" id="img5103968" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13797510"></a><a class="title" href="/cubby_view.html?entryid=13797510&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/04/18</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=13797510&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13797352&amp;saveit=Yes" class="preview"><span id="img-wrapper-5103828"><img data-info="5103828-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAq5PixfeFei" id="img5103828" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13797352"></a><a class="title" href="/cubby_view.html?entryid=13797352&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Print Literacy Development, Social / Emotional for 05/04/18</a><br><b>reading books before lunch</b> <a class="info" href="/cubby_view.html?entryid=13797352&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13795989&amp;saveit=Yes" class="preview"><span id="img-wrapper-5102943"><img data-info="5102943-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAq4PypUeFei" id="img5102943" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13795989"></a><a class="title" href="/cubby_view.html?entryid=13795989&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor for 05/04/18</a><br><b>hanging in the shade</b> <a class="info" href="/cubby_view.html?entryid=13795989&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13794832&amp;saveit=Yes" class="preview"><span id="img-wrapper-5102506"><img data-info="5102506-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAq4My5ReFei" id="img5102506" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13794832"></a><a class="title" href="/cubby_view.html?entryid=13794832&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 05/04/18</a><br><b>playing with toys</b> <a class="info" href="/cubby_view.html?entryid=13794832&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13794184&amp;saveit=Yes" class="preview"><span id="img-wrapper-5102369"><img data-info="5102369-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAq4NSheeFei" id="img5102369" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13794184"></a><a class="title" href="/cubby_view.html?entryid=13794184&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/04/18</a><br><b>having fun</b> <a class="info" href="/cubby_view.html?entryid=13794184&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13778723&amp;saveit=Yes" class="preview"><span id="img-wrapper-5100420"><img data-info="5100420-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbAq6MixXeFei" id="img5100420" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13778723"></a><a class="title" href="/cubby_view.html?entryid=13778723&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 05/03/18</a><br><b>reading books</b> <a class="info" href="/cubby_view.html?entryid=13778723&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13771889&amp;saveit=Yes" class="preview"><span id="img-wrapper-5094606"><img data-info="5094606-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQO-MC5ReFei" id="img5094606" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13771889"></a><a class="title" href="/cubby_view.html?entryid=13771889&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/03/18</a><br><b>kitchen fun</b> <a class="info" href="/cubby_view.html?entryid=13771889&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13771695&amp;saveit=Yes" class="preview"><span id="img-wrapper-5094557"><img data-info="5094557-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQO-MytQeFei" id="img5094557" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13771695"></a><a class="title" href="/cubby_view.html?entryid=13771695&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 05/03/18</a><br><b>books are fun</b> <a class="info" href="/cubby_view.html?entryid=13771695&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13771611&amp;saveit=Yes" class="preview"><span id="img-wrapper-5094535"><img data-info="5094535-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQO-My1SeFei" id="img5094535" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13771611"></a><a class="title" href="/cubby_view.html?entryid=13771611&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/03/18</a><br><b>just relaxing</b> <a class="info" href="/cubby_view.html?entryid=13771611&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13771101&amp;saveit=Yes" class="preview"><span id="img-wrapper-5094383"><img data-info="5094383-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQO-NSZUeFei" id="img5094383" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13771101"></a><a class="title" href="/cubby_view.html?entryid=13771101&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 05/03/18</a><br><b>reading with my friend</b> <a class="info" href="/cubby_view.html?entryid=13771101&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13755077&amp;saveit=Yes" class="preview"><span id="img-wrapper-5092298"><img data-info="5092298-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQO4NCdfeFei" id="img5092298" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13755077"></a><a class="title" href="/cubby_view.html?entryid=13755077&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 05/02/18</a><br><b>snack time</b> <a class="info" href="/cubby_view.html?entryid=13755077&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13751484&amp;saveit=Yes" class="preview"><span id="img-wrapper-5088135"><img data-info="5088135-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQKyNy1SeFei" id="img5088135" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13751484"></a><a class="title" href="/cubby_view.html?entryid=13751484&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Print Literacy Development, Social / Emotional for 05/02/18</a><br><b>reading books</b> <a class="info" href="/cubby_view.html?entryid=13751484&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13732408&amp;saveit=Yes" class="preview"><span id="img-wrapper-5085235"><img data-info="5085235-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQK_NC1SeFei" id="img5085235" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13732408"></a><a class="title" href="/cubby_view.html?entryid=13732408&amp;saveit=Yes">05/01/18</a><br><b>playing with friends</b> <a class="info" href="/cubby_view.html?entryid=13732408&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13732003&amp;saveit=Yes" class="preview"><span id="img-wrapper-5084864"><img data-info="5084864-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQK-PihTeFei" id="img5084864" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13732003"></a><a class="title" href="/cubby_view.html?entryid=13732003&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 05/01/18</a><br><b>water coloring</b> <a class="info" href="/cubby_view.html?entryid=13732003&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13726374&amp;saveit=Yes" class="preview"><span id="img-wrapper-5079434"><img data-info="5079434-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ2zMi1TeFei" id="img5079434" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13726374"></a><a class="title" href="/cubby_view.html?entryid=13726374&amp;saveit=Yes">Dramatic Play for 05/01/18</a><br><b>Blocks</b> <a class="info" href="/cubby_view.html?entryid=13726374&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13708984&amp;saveit=Yes" class="preview"><span id="img-wrapper-5077315"><img data-info="5077315-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ29NS9SeFei" id="img5077315" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13708984"></a><a class="title" href="/cubby_view.html?entryid=13708984&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional, Sensory for 04/30/18</a><br><b>playing with play doh</b> <a class="info" href="/cubby_view.html?entryid=13708984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13708800&amp;saveit=Yes" class="preview"><span id="img-wrapper-5077102"><img data-info="5077102-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ29Ny5VeFei" id="img5077102" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13708800"></a><a class="title" href="/cubby_view.html?entryid=13708800&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/30/18</a><br><b>riding bikes</b> <a class="info" href="/cubby_view.html?entryid=13708800&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13702774&amp;saveit=Yes" class="preview"><span id="img-wrapper-5071215"><img data-info="5071215-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ27NC9SeFei" id="img5071215" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13702774"></a><a class="title" href="/cubby_view.html?entryid=13702774&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 04/30/18</a><br><b>climbing up the jungle gym</b> <a class="info" href="/cubby_view.html?entryid=13702774&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13701611&amp;saveit=Yes" class="preview"><span id="img-wrapper-5070751"><img data-info="5070751-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ26MStWeFei" id="img5070751" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13701611"></a><a class="title" href="/cubby_view.html?entryid=13701611&amp;saveit=Yes">Fine Motor, Social / Emotional for 04/30/18</a><br><b>Cleaning up together!</b> <a class="info" href="/cubby_view.html?entryid=13701611&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13701610&amp;saveit=Yes" class="preview"><span id="img-wrapper-5070750"><img data-info="5070750-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ26MStXeFei" id="img5070750" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13701610"></a><a class="title" href="/cubby_view.html?entryid=13701610&amp;saveit=Yes">Fine Motor, Social / Emotional for 04/30/18</a><br><b>Cleaning up together!</b> <a class="info" href="/cubby_view.html?entryid=13701610&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13657537&amp;saveit=Yes" class="preview"><span id="img-wrapper-5055439"><img data-info="5055439-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ-_Mi1eeFei" id="img5055439" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13657537"></a><a class="title" href="/cubby_view.html?entryid=13657537&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/26/18</a><br><b>circle time</b><br>outside <a class="info" href="/cubby_view.html?entryid=13657537&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13655267&amp;saveit=Yes" class="preview"><span id="img-wrapper-5054496"><img data-info="5054496-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ--MidReFei" id="img5054496" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13655267"></a><a class="title" href="/cubby_view.html?entryid=13655267&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/26/18</a><br><b>building a tower</b> <a class="info" href="/cubby_view.html?entryid=13655267&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13632193&amp;saveit=Yes" class="preview"><span id="img-wrapper-5046758"><img data-info="5046758-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ68MStfeFei" id="img5046758" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13632193"></a><a class="title" href="/cubby_view.html?entryid=13632193&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/25/18</a><br><b>reading with a friend</b> <a class="info" href="/cubby_view.html?entryid=13632193&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13631017&amp;saveit=Yes" class="preview"><span id="img-wrapper-5046605"><img data-info="5046605-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQ68MC5SeFei" id="img5046605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13631017"></a><a class="title" href="/cubby_view.html?entryid=13631017&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/25/18</a><br><b>blocks and friends having fun</b> <a class="info" href="/cubby_view.html?entryid=13631017&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13610308&amp;saveit=Yes" class="preview"><span id="img-wrapper-5038982"><img data-info="5038982-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQmyPyZVeFei" id="img5038982" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13610308"></a><a class="title" href="/cubby_view.html?entryid=13610308&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/24/18</a><br><b>outside circle time with our Monkey friends</b> <a class="info" href="/cubby_view.html?entryid=13610308&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13587725&amp;saveit=Yes" class="preview"><span id="img-wrapper-5031243"><img data-info="5031243-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQm7NCpUeFei" id="img5031243" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13587725"></a><a class="title" href="/cubby_view.html?entryid=13587725&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/23/18</a><br><b>playing with star blocks before lunch</b> <a class="info" href="/cubby_view.html?entryid=13587725&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13586882&amp;saveit=Yes" class="preview"><span id="img-wrapper-5030745"><img data-info="5030745-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQm6MSpSeFei" id="img5030745" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13586882"></a><a class="title" href="/cubby_view.html?entryid=13586882&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/23/18</a><br><b>circle time</b><br>circle time outside today <a class="info" href="/cubby_view.html?entryid=13586882&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13586767&amp;saveit=Yes" class="preview"><span id="img-wrapper-5030697"><img data-info="5030697-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQm6MCdQeFei" id="img5030697" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13586767"></a><a class="title" href="/cubby_view.html?entryid=13586767&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/23/18</a><br><b>fun outside</b> <a class="info" href="/cubby_view.html?entryid=13586767&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13584360&amp;saveit=Yes" class="preview"><span id="img-wrapper-5029870"><img data-info="5029870-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQizPilXeFei" id="img5029870" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13584360"></a><a class="title" href="/cubby_view.html?entryid=13584360&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/23/18</a><br><b>playing with blocks</b> <a class="info" href="/cubby_view.html?entryid=13584360&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13584066&amp;saveit=Yes" class="preview"><span id="img-wrapper-5029819"><img data-info="5029819-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQizPi9eeFei" id="img5029819" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13584066"></a><a class="title" href="/cubby_view.html?entryid=13584066&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/23/18</a><br><b>playing with blocks and friends</b> <a class="info" href="/cubby_view.html?entryid=13584066&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13583828&amp;saveit=Yes" class="preview"><span id="img-wrapper-5029788"><img data-info="5029788-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQizMSZfeFei" id="img5029788" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13583828"></a><a class="title" href="/cubby_view.html?entryid=13583828&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 04/23/18</a><br><b>playing with blocks</b> <a class="info" href="/cubby_view.html?entryid=13583828&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13568792&amp;saveit=Yes" class="preview"><span id="img-wrapper-5027896"><img data-info="5027896-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQi9PidReFei" id="img5027896" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13568792"></a><a class="title" href="/cubby_view.html?entryid=13568792&amp;saveit=Yes">Dramatic Play, Fine Motor, Language / Vocal Communication for 04/20/18</a><br><b>playing with the tractor</b> <a class="info" href="/cubby_view.html?entryid=13568792&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13568633&amp;saveit=Yes" class="preview"><span id="img-wrapper-5027713"><img data-info="5027713-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQi9MS9UeFei" id="img5027713" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13568633"></a><a class="title" href="/cubby_view.html?entryid=13568633&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication for 04/20/18</a><br><b>jumping high</b> <a class="info" href="/cubby_view.html?entryid=13568633&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13562007&amp;saveit=Yes" class="preview"><span id="img-wrapper-5022865"><img data-info="5022865-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQi4PihSeFei" id="img5022865" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13562007"></a><a class="title" href="/cubby_view.html?entryid=13562007&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/20/18</a><br><b>playing with cars together</b> <a class="info" href="/cubby_view.html?entryid=13562007&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13548954&amp;saveit=Yes" class="preview"><span id="img-wrapper-5022030"><img data-info="5022030-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQi4Ni1XeFei" id="img5022030" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13548954"></a><a class="title" href="/cubby_view.html?entryid=13548954&amp;saveit=Yes">04/19/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13548954&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13541086&amp;saveit=Yes" class="preview"><span id="img-wrapper-5015508"><img data-info="5015508-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQu_My5feFei" id="img5015508" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13541086"></a><a class="title" href="/cubby_view.html?entryid=13541086&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 04/19/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13541086&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13525632&amp;saveit=Yes" class="preview"><span id="img-wrapper-5014184"><img data-info="5014184-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQu-NyZTeFei" id="img5014184" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13525632"></a><a class="title" href="/cubby_view.html?entryid=13525632&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional, Sensory for 04/18/18</a><br><b>making a sun</b> <a class="info" href="/cubby_view.html?entryid=13525632&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13525146&amp;saveit=Yes" class="preview"><span id="img-wrapper-5013713"><img data-info="5013713-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQu5MS9UeFei" id="img5013713" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13525146"></a><a class="title" href="/cubby_view.html?entryid=13525146&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/18/18</a><br><b>playing with the doll house together</b><br>sharing toys <a class="info" href="/cubby_view.html?entryid=13525146&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13516692&amp;saveit=Yes" class="preview"><span id="img-wrapper-5007159"><img data-info="5007159-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQq9NyteeFei" id="img5007159" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13516692"></a><a class="title" href="/cubby_view.html?entryid=13516692&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/18/18</a><br><b>truck fun</b> <a class="info" href="/cubby_view.html?entryid=13516692&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13502101&amp;saveit=Yes" class="preview"><span id="img-wrapper-5005724"><img data-info="5005724-90-0" src="https://www.lifecubby.me/i/rmrmJYwCbQq_MSxTeFei" id="img5005724" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13502101"></a><a class="title" href="/cubby_view.html?entryid=13502101&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/17/18</a><br><b>enjoying the weather</b> <a class="info" href="/cubby_view.html?entryid=13502101&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13496972&amp;saveit=Yes" class="preview"><span id="img-wrapper-4999604"><img data-info="4999604-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAOzMC5TeFei" id="img4999604" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13496972"></a><a class="title" href="/cubby_view.html?entryid=13496972&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Music, Social / Emotional for 04/17/18</a><br><b>circle time</b><br>singing songs <a class="info" href="/cubby_view.html?entryid=13496972&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13479050&amp;saveit=Yes" class="preview"><span id="img-wrapper-4997129"><img data-info="4997129-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAO9NyxeeFei" id="img4997129" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13479050"></a><a class="title" href="/cubby_view.html?entryid=13479050&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/16/18</a><br><b>making a windsock</b> <a class="info" href="/cubby_view.html?entryid=13479050&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13477892&amp;saveit=Yes" class="preview"><span id="img-wrapper-4995898"><img data-info="4995898-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAO_PidfeFei" id="img4995898" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13477892"></a><a class="title" href="/cubby_view.html?entryid=13477892&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/16/18</a><br><b>snack</b> <a class="info" href="/cubby_view.html?entryid=13477892&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13471922&amp;saveit=Yes" class="preview"><span id="img-wrapper-4990633"><img data-info="4990633-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAO6MC1UeFei" id="img4990633" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13471922"></a><a class="title" href="/cubby_view.html?entryid=13471922&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/16/18</a><br><b>kitchen fun</b> <a class="info" href="/cubby_view.html?entryid=13471922&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13451312&amp;saveit=Yes" class="preview"><span id="img-wrapper-4983031"><img data-info="4983031-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAK5Ni1WeFei" id="img4983031" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13451312"></a><a class="title" href="/cubby_view.html?entryid=13451312&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication for 04/13/18</a><br><b>circle time outsid</b> <a class="info" href="/cubby_view.html?entryid=13451312&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13451283&amp;saveit=Yes" class="preview"><span id="img-wrapper-4983021"><img data-info="4983021-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAK5NixWeFei" id="img4983021" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13451283"></a><a class="title" href="/cubby_view.html?entryid=13451283&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Sensory for 04/13/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13451283&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13450959&amp;saveit=Yes" class="preview"><span id="img-wrapper-4982852"><img data-info="4982852-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAK4PitVeFei" id="img4982852" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13450959"></a><a class="title" href="/cubby_view.html?entryid=13450959&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 04/13/18</a><br><b>slide fun</b> <a class="info" href="/cubby_view.html?entryid=13450959&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13450927&amp;saveit=Yes" class="preview"><span id="img-wrapper-4982836"><img data-info="4982836-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAK4Pi1ReFei" id="img4982836" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13450927"></a><a class="title" href="/cubby_view.html?entryid=13450927&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/13/18</a><br><b>playground time</b> <a class="info" href="/cubby_view.html?entryid=13450927&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13429714&amp;saveit=Yes" class="preview"><span id="img-wrapper-4975861"><img data-info="4975861-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA2_PihWeFei" id="img4975861" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13429714"></a><a class="title" href="/cubby_view.html?entryid=13429714&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 04/12/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=13429714&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13429203&amp;saveit=Yes" class="preview"><span id="img-wrapper-4975597"><img data-info="4975597-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA2_MydQeFei" id="img4975597" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13429203"></a><a class="title" href="/cubby_view.html?entryid=13429203&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/12/18</a><br><b>riding bikes</b> <a class="info" href="/cubby_view.html?entryid=13429203&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13428813&amp;saveit=Yes" class="preview"><span id="img-wrapper-4975352"><img data-info="4975352-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA2_NStVeFei" id="img4975352" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13428813"></a><a class="title" href="/cubby_view.html?entryid=13428813&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/12/18</a><br><b>playing with the doll house</b> <a class="info" href="/cubby_view.html?entryid=13428813&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13380415&amp;saveit=Yes" class="preview"><span id="img-wrapper-4958534"><img data-info="4958534-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA-yMy1TeFei" id="img4958534" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13380415"></a><a class="title" href="/cubby_view.html?entryid=13380415&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/10/18</a><br><b>building a tower</b> <a class="info" href="/cubby_view.html?entryid=13380415&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13364135&amp;saveit=Yes" class="preview"><span id="img-wrapper-4956657"><img data-info="4956657-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA-8MCtQeFei" id="img4956657" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13364135"></a><a class="title" href="/cubby_view.html?entryid=13364135&amp;saveit=Yes">04/09/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13364135&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13363822&amp;saveit=Yes" class="preview"><span id="img-wrapper-4956348"><img data-info="4956348-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA-8NSpfeFei" id="img4956348" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13363822"></a><a class="title" href="/cubby_view.html?entryid=13363822&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 04/09/18</a><br><b>snack time</b> <a class="info" href="/cubby_view.html?entryid=13363822&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13359672&amp;saveit=Yes" class="preview"><span id="img-wrapper-4952089"><img data-info="4952089-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA-4NiZeeFei" id="img4952089" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13359672"></a><a class="title" href="/cubby_view.html?entryid=13359672&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Social / Emotional for 04/09/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=13359672&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13357111&amp;saveit=Yes" class="preview"><span id="img-wrapper-4951133"><img data-info="4951133-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA-7Ny1UeFei" id="img4951133" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13357111"></a><a class="title" href="/cubby_view.html?entryid=13357111&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional, Sensory for 04/09/18</a><br><b>playing in the kitchen, making food</b> <a class="info" href="/cubby_view.html?entryid=13357111&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13341381&amp;saveit=Yes" class="preview"><span id="img-wrapper-4948852"><img data-info="4948852-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA6yPitVeFei" id="img4948852" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13341381"></a><a class="title" href="/cubby_view.html?entryid=13341381&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional, Sensory for 04/06/18</a><br><b>making some food in the kitchen</b> <a class="info" href="/cubby_view.html?entryid=13341381&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13341320&amp;saveit=Yes" class="preview"><span id="img-wrapper-4948781"><img data-info="4948781-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA6yMSZWeFei" id="img4948781" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13341320"></a><a class="title" href="/cubby_view.html?entryid=13341320&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/06/18</a><br><b>playing with the doll house</b> <a class="info" href="/cubby_view.html?entryid=13341320&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13337719&amp;saveit=Yes" class="preview"><span id="img-wrapper-4944823"><img data-info="4944823-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZA6-PixUeFei" id="img4944823" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13337719"></a><a class="title" href="/cubby_view.html?entryid=13337719&amp;saveit=Yes">Dramatic Play, Fine Motor for 04/06/18</a><br><b></b><br>captured the chair <a class="info" href="/cubby_view.html?entryid=13337719&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13299999&amp;saveit=Yes" class="preview"><span id="img-wrapper-4934725"><img data-info="4934725-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAm-MSxSeFei" id="img4934725" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13299999"></a><a class="title" href="/cubby_view.html?entryid=13299999&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Social / Emotional for 04/04/18</a><br><b>kangaroos and zebra friends enjoying books</b> <a class="info" href="/cubby_view.html?entryid=13299999&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13295149&amp;saveit=Yes" class="preview"><span id="img-wrapper-4929734"><img data-info="4929734-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAizMS1TeFei" id="img4929734" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13295149"></a><a class="title" href="/cubby_view.html?entryid=13295149&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Social / Emotional, Sensory for 04/04/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=13295149&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13295009&amp;saveit=Yes" class="preview"><span id="img-wrapper-4929655"><img data-info="4929655-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAizMCtSeFei" id="img4929655" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13295009"></a><a class="title" href="/cubby_view.html?entryid=13295009&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/04/18</a><br><b>had fun learning about soccer shots and getting to play</b> <a class="info" href="/cubby_view.html?entryid=13295009&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13292153&amp;saveit=Yes" class="preview"><span id="img-wrapper-4928632"><img data-info="4928632-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAiyMC1VeFei" id="img4928632" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13292153"></a><a class="title" href="/cubby_view.html?entryid=13292153&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/04/18</a><br><b>playing with the truck n trailer</b> <a class="info" href="/cubby_view.html?entryid=13292153&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13272365&amp;saveit=Yes" class="preview"><span id="img-wrapper-4921755"><img data-info="4921755-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAi7MStSeFei" id="img4921755" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13272365"></a><a class="title" href="/cubby_view.html?entryid=13272365&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/03/18</a><br><b>sun art</b> <a class="info" href="/cubby_view.html?entryid=13272365&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13270965&amp;saveit=Yes" class="preview"><span id="img-wrapper-4921300"><img data-info="4921300-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAi7NS5XeFei" id="img4921300" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13270965"></a><a class="title" href="/cubby_view.html?entryid=13270965&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Social / Emotional for 04/03/18</a><br><b>friends are fun</b> <a class="info" href="/cubby_view.html?entryid=13270965&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13270888&amp;saveit=Yes" class="preview"><span id="img-wrapper-4921276"><img data-info="4921276-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAi7NClReFei" id="img4921276" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13270888"></a><a class="title" href="/cubby_view.html?entryid=13270888&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 04/03/18</a><br><b>having fun with friends</b> <a class="info" href="/cubby_view.html?entryid=13270888&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13270742&amp;saveit=Yes" class="preview"><span id="img-wrapper-4921255"><img data-info="4921255-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAi7NCtSeFei" id="img4921255" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13270742"></a><a class="title" href="/cubby_view.html?entryid=13270742&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/03/18</a><br><b>kitchen fun</b> <a class="info" href="/cubby_view.html?entryid=13270742&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13257067&amp;saveit=Yes" class="preview"><span id="img-wrapper-4919401"><img data-info="4919401-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAuzMi5WeFei" id="img4919401" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13257067"></a><a class="title" href="/cubby_view.html?entryid=13257067&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/02/18</a><br><b>play time</b> <a class="info" href="/cubby_view.html?entryid=13257067&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13252779&amp;saveit=Yes" class="preview"><span id="img-wrapper-4915261"><img data-info="4915261-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu_NChWeFei" id="img4915261" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13252779"></a><a class="title" href="/cubby_view.html?entryid=13252779&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/02/18</a><br><b>circle tine</b><br>singing along <a class="info" href="/cubby_view.html?entryid=13252779&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13252361&amp;saveit=Yes" class="preview"><span id="img-wrapper-4915094"><img data-info="4915094-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu_NidTeFei" id="img4915094" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13252361"></a><a class="title" href="/cubby_view.html?entryid=13252361&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 04/02/18</a><br><b>riding bikes</b> <a class="info" href="/cubby_view.html?entryid=13252361&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13250938&amp;saveit=Yes" class="preview"><span id="img-wrapper-4914603"><img data-info="4914603-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu-MC5UeFei" id="img4914603" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13250938"></a><a class="title" href="/cubby_view.html?entryid=13250938&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/02/18</a><br><b>playtime</b> <a class="info" href="/cubby_view.html?entryid=13250938&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13250577&amp;saveit=Yes" class="preview"><span id="img-wrapper-4914500"><img data-info="4914500-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu-My5XeFei" id="img4914500" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13250577"></a><a class="title" href="/cubby_view.html?entryid=13250577&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 04/02/18</a><br><b>fun with friends</b> <a class="info" href="/cubby_view.html?entryid=13250577&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13238224&amp;saveit=Yes" class="preview"><span id="img-wrapper-4912972"><img data-info="4912972-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu4PylVeFei" id="img4912972" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13238224"></a><a class="title" href="/cubby_view.html?entryid=13238224&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Social / Emotional, Sensory for 03/30/18</a><br><b>easter egg art</b> <a class="info" href="/cubby_view.html?entryid=13238224&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13238216&amp;saveit=Yes" class="preview"><span id="img-wrapper-4912972"><img data-info="4912972-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu4PylVeFei" id="img4912972" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13238216"></a><a class="title" href="/cubby_view.html?entryid=13238216&amp;saveit=Yes">03/30/18</a><br><b>easter egg art</b> <a class="info" href="/cubby_view.html?entryid=13238216&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13235946&amp;saveit=Yes" class="preview"><span id="img-wrapper-4910049"><img data-info="4910049-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu6NipeeFei" id="img4910049" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13235946"></a><a class="title" href="/cubby_view.html?entryid=13235946&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 03/30/18</a><br><b>bike fun</b> <a class="info" href="/cubby_view.html?entryid=13235946&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13235877&amp;saveit=Yes" class="preview"><span id="img-wrapper-4910000"><img data-info="4910000-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAu6Ni5XeFei" id="img4910000" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13235877"></a><a class="title" href="/cubby_view.html?entryid=13235877&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Social / Emotional for 03/30/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=13235877&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13234620&amp;saveit=Yes" class="preview"><span id="img-wrapper-4909199"><img data-info="4909199-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAqzNydeeFei" id="img4909199" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13234620"></a><a class="title" href="/cubby_view.html?entryid=13234620&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/30/18</a><br><b>art time</b><br>making an umbrella <a class="info" href="/cubby_view.html?entryid=13234620&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13226156&amp;saveit=Yes" class="preview"><span id="img-wrapper-4907586"><img data-info="4907586-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZAq9MyZReFei" id="img4907586" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13226156"></a><a class="title" href="/cubby_view.html?entryid=13226156&amp;saveit=Yes">03/29/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13226156&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13199416&amp;saveit=Yes" class="preview"><span id="img-wrapper-4893063"><img data-info="4893063-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQO5NihUeFei" id="img4893063" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13199416"></a><a class="title" href="/cubby_view.html?entryid=13199416&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Math, Social / Emotional, Sensory for 03/28/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=13199416&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13194835&amp;saveit=Yes" class="preview"><span id="img-wrapper-4891489"><img data-info="4891489-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQO7MiZeeFei" id="img4891489" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13194835"></a><a class="title" href="/cubby_view.html?entryid=13194835&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 03/28/18</a><br><b>eating breakfast</b> <a class="info" href="/cubby_view.html?entryid=13194835&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13179165&amp;saveit=Yes" class="preview"><span id="img-wrapper-4886033"><img data-info="4886033-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQK8Ni1UeFei" id="img4886033" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13179165"></a><a class="title" href="/cubby_view.html?entryid=13179165&amp;saveit=Yes">03/27/18</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=13179165&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13176795&amp;saveit=Yes" class="preview"><span id="img-wrapper-4884577"><img data-info="4884577-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQK-MylQeFei" id="img4884577" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13176795"></a><a class="title" href="/cubby_view.html?entryid=13176795&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 03/27/18</a><br><b>gym time</b> <a class="info" href="/cubby_view.html?entryid=13176795&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13174615&amp;saveit=Yes" class="preview"><span id="img-wrapper-4884027"><img data-info="4884027-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQK-NixQeFei" id="img4884027" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13174615"></a><a class="title" href="/cubby_view.html?entryid=13174615&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 03/27/18</a><br><b>fun at play time</b> <a class="info" href="/cubby_view.html?entryid=13174615&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13157761&amp;saveit=Yes" class="preview"><span id="img-wrapper-4878644"><img data-info="4878644-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQ2yMCpTeFei" id="img4878644" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13157761"></a><a class="title" href="/cubby_view.html?entryid=13157761&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 03/26/18</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=13157761&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13134522&amp;saveit=Yes" class="preview"><span id="img-wrapper-4870289"><img data-info="4870289-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQ26NCZeeFei" id="img4870289" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13134522"></a><a class="title" href="/cubby_view.html?entryid=13134522&amp;saveit=Yes">03/23/18</a><br><b>playing with friends  is fun</b> <a class="info" href="/cubby_view.html?entryid=13134522&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13134486&amp;saveit=Yes" class="preview"><span id="img-wrapper-4870266"><img data-info="4870266-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQ26NChReFei" id="img4870266" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13134486"></a><a class="title" href="/cubby_view.html?entryid=13134486&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 03/23/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=13134486&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13132312&amp;saveit=Yes" class="preview"><span id="img-wrapper-4869410"><img data-info="4869410-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQyzMi9XeFei" id="img4869410" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13132312"></a><a class="title" href="/cubby_view.html?entryid=13132312&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Language / Vocal Communication, Social / Emotional, Sensory for 03/23/18</a><br><b>letter E</b> <a class="info" href="/cubby_view.html?entryid=13132312&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13097690&amp;saveit=Yes" class="preview"><span id="img-wrapper-4860835"><img data-info="4860835-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQy6Pi1SeFei" id="img4860835" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13097690"></a><a class="title" href="/cubby_view.html?entryid=13097690&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 03/21/18</a><br><b>the slide is fun</b> <a class="info" href="/cubby_view.html?entryid=13097690&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13097679&amp;saveit=Yes" class="preview"><span id="img-wrapper-4860827"><img data-info="4860827-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQy6PixQeFei" id="img4860827" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13097679"></a><a class="title" href="/cubby_view.html?entryid=13097679&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 03/21/18</a><br><b>they love the weather</b> <a class="info" href="/cubby_view.html?entryid=13097679&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13071434&amp;saveit=Yes" class="preview"><span id="img-wrapper-4848445"><img data-info="4848445-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQ6yMipSeFei" id="img4848445" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13071434"></a><a class="title" href="/cubby_view.html?entryid=13071434&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Social / Emotional for 03/20/18</a><br><b>reading fun</b> <a class="info" href="/cubby_view.html?entryid=13071434&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13057140&amp;saveit=Yes" class="preview"><span id="img-wrapper-4847175"><img data-info="4847175-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQ69NylSeFei" id="img4847175" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13057140"></a><a class="title" href="/cubby_view.html?entryid=13057140&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Language / Vocal Communication, Social / Emotional, Sensory for 03/19/18</a><br><b>clouds</b> <a class="info" href="/cubby_view.html?entryid=13057140&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13051573&amp;saveit=Yes" class="preview"><span id="img-wrapper-4841587"><img data-info="4841587-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQ67MyZQeFei" id="img4841587" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13051573"></a><a class="title" href="/cubby_view.html?entryid=13051573&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/19/18</a><br><b>play ground fun</b> <a class="info" href="/cubby_view.html?entryid=13051573&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13030581&amp;saveit=Yes" class="preview"><span id="img-wrapper-4834101"><img data-info="4834101-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQm-Ny5WeFei" id="img4834101" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13030581"></a><a class="title" href="/cubby_view.html?entryid=13030581&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Social / Emotional for 03/16/18</a><br><b>coloring leprachons</b> <a class="info" href="/cubby_view.html?entryid=13030581&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13030292&amp;saveit=Yes" class="preview"><span id="img-wrapper-4833953"><img data-info="4833953-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQm5PytUeFei" id="img4833953" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13030292"></a><a class="title" href="/cubby_view.html?entryid=13030292&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Science, Social / Emotional for 03/16/18</a><br><b>science experiment</b> <a class="info" href="/cubby_view.html?entryid=13030292&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13029374&amp;saveit=Yes" class="preview"><span id="img-wrapper-4833518"><img data-info="4833518-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQm5My9feFei" id="img4833518" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13029374"></a><a class="title" href="/cubby_view.html?entryid=13029374&amp;saveit=Yes">Dramatic Play, Math for 03/16/18</a><br><b>counting bears</b> <a class="info" href="/cubby_view.html?entryid=13029374&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=13010704&amp;saveit=Yes" class="preview"><span id="img-wrapper-4826700"><img data-info="4826700-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQi8MS5XeFei" id="img4826700" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="13010704"></a><a class="title" href="/cubby_view.html?entryid=13010704&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 03/15/18</a><br><b>building an airplane</b> <a class="info" href="/cubby_view.html?entryid=13010704&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12987042&amp;saveit=Yes" class="preview"><span id="img-wrapper-4817689"><img data-info="4817689-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQu9MCZeeFei" id="img4817689" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12987042"></a><a class="title" href="/cubby_view.html?entryid=12987042&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/14/18</a><br><b>playing with the people</b> <a class="info" href="/cubby_view.html?entryid=12987042&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12967374&amp;saveit=Yes" class="preview"><span id="img-wrapper-4810918"><img data-info="4810918-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQu6Py9feFei" id="img4810918" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12967374"></a><a class="title" href="/cubby_view.html?entryid=12967374&amp;saveit=Yes">03/13/18</a><br><b>Sebastian has a accident report to be signed at pick up!</b> <a class="info" href="/cubby_view.html?entryid=12967374&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12967126&amp;saveit=Yes" class="preview"><span id="img-wrapper-4810784"><img data-info="4810784-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQu6MSZTeFei" id="img4810784" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12967126"></a><a class="title" href="/cubby_view.html?entryid=12967126&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication for 03/13/18</a><br><b>smiling big while having fun but it's a little chilly</b> <a class="info" href="/cubby_view.html?entryid=12967126&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12949014&amp;saveit=Yes" class="preview"><span id="img-wrapper-4805804"><img data-info="4805804-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQq_Pi5TeFei" id="img4805804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12949014"></a><a class="title" href="/cubby_view.html?entryid=12949014&amp;saveit=Yes">Approaches to Learning / Cognitive, Social Studies for 03/12/18</a><br><b>looking at the mess the leprechaun made in our classroom</b> <a class="info" href="/cubby_view.html?entryid=12949014&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12948996&amp;saveit=Yes" class="preview"><span id="img-wrapper-4805789"><img data-info="4805789-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQq_MSZeeFei" id="img4805789" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12948996"></a><a class="title" href="/cubby_view.html?entryid=12948996&amp;saveit=Yes">Dramatic Play, Social Studies for 03/12/18</a><br><b>searching for leprechaun gold</b> <a class="info" href="/cubby_view.html?entryid=12948996&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12943624&amp;saveit=Yes" class="preview"><span id="img-wrapper-4802246"><img data-info="4802246-90-0" src="https://www.lifecubby.me/i/rmrmJYwDZQq4NCpReFei" id="img4802246" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12943624"></a><a class="title" href="/cubby_view.html?entryid=12943624&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/12/18</a><br><b>coloring cars</b> <a class="info" href="/cubby_view.html?entryid=12943624&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12928947&amp;saveit=Yes" class="preview"><span id="img-wrapper-4799902"><img data-info="4799902-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagOzPy5VeFei" id="img4799902" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12928947"></a><a class="title" href="/cubby_view.html?entryid=12928947&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition for 03/09/18</a><br><b>snack is yummy</b> <a class="info" href="/cubby_view.html?entryid=12928947&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12923350&amp;saveit=Yes" class="preview"><span id="img-wrapper-4794568"><img data-info="4794568-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagO-MyhfeFei" id="img4794568" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12923350"></a><a class="title" href="/cubby_view.html?entryid=12923350&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 03/09/18</a><br><b>'i got scary bugs'</b> <a class="info" href="/cubby_view.html?entryid=12923350&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12923104&amp;saveit=Yes" class="preview"><span id="img-wrapper-4794508"><img data-info="4794508-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagO-My5feFei" id="img4794508" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12923104"></a><a class="title" href="/cubby_view.html?entryid=12923104&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 03/09/18</a><br><b>Lego fun</b> <a class="info" href="/cubby_view.html?entryid=12923104&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12886760&amp;saveit=Yes" class="preview"><span id="img-wrapper-4784562"><img data-info="4784562-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagK-MyhVeFei" id="img4784562" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12886760"></a><a class="title" href="/cubby_view.html?entryid=12886760&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/07/18</a><br><b>art time</b> <a class="info" href="/cubby_view.html?entryid=12886760&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12880038&amp;saveit=Yes" class="preview"><span id="img-wrapper-4778593"><img data-info="4778593-90-0" src="https://www.lifecubby.me/i/rmrmJYwDag2yMydUeFei" id="img4778593" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12880038"></a><a class="title" href="/cubby_view.html?entryid=12880038&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 03/07/18</a><br><b>making Mac n cheese</b> <a class="info" href="/cubby_view.html?entryid=12880038&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12878827&amp;saveit=Yes" class="preview"><span id="img-wrapper-4778284"><img data-info="4778284-90-0" src="https://www.lifecubby.me/i/rmrmJYwDag2yNCZTeFei" id="img4778284" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12878827"></a><a class="title" href="/cubby_view.html?entryid=12878827&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 03/07/18</a><br><b>animals are fun</b> <a class="info" href="/cubby_view.html?entryid=12878827&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12865235&amp;saveit=Yes" class="preview"><span id="img-wrapper-4777143"><img data-info="4777143-90-0" src="https://www.lifecubby.me/i/rmrmJYwDag29NypUeFei" id="img4777143" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12865235"></a><a class="title" href="/cubby_view.html?entryid=12865235&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/06/18</a><br><b>art time</b><br>letter C <a class="info" href="/cubby_view.html?entryid=12865235&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12842559&amp;saveit=Yes" class="preview"><span id="img-wrapper-4768823"><img data-info="4768823-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagyyPixUeFei" id="img4768823" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12842559"></a><a class="title" href="/cubby_view.html?entryid=12842559&amp;saveit=Yes">03/05/18</a><br><b>having fun with toys!</b> <a class="info" href="/cubby_view.html?entryid=12842559&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12841933&amp;saveit=Yes" class="preview"><span id="img-wrapper-4768232"><img data-info="4768232-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagyyNC1VeFei" id="img4768232" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12841933"></a><a class="title" href="/cubby_view.html?entryid=12841933&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 03/05/18</a><br><b>finger painting</b><br>art time <a class="info" href="/cubby_view.html?entryid=12841933&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12834361&amp;saveit=Yes" class="preview"><span id="img-wrapper-4762469"><img data-info="4762469-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagy4MiheeFei" id="img4762469" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12834361"></a><a class="title" href="/cubby_view.html?entryid=12834361&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 03/05/18</a><br><b>fun playing with friends</b> <a class="info" href="/cubby_view.html?entryid=12834361&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12813363&amp;saveit=Yes" class="preview"><span id="img-wrapper-4754293"><img data-info="4754293-90-0" src="https://www.lifecubby.me/i/rmrmJYwDag--NCdUeFei" id="img4754293" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12813363"></a><a class="title" href="/cubby_view.html?entryid=12813363&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 03/02/18</a><br><b>blocks are fun</b> <a class="info" href="/cubby_view.html?entryid=12813363&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12813213&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="12813213"></a><a class="title" href="/cubby_view.html?entryid=12813213&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 03/02/18</a><br><b>blocks are fun</b> <a class="info" href="/cubby_view.html?entryid=12813213&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12777671&amp;saveit=Yes" class="preview"><span id="img-wrapper-4745312"><img data-info="4745312-90-0" src="https://www.lifecubby.me/i/rmrmJYwDag6_NS9VeFei" id="img4745312" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12777671"></a><a class="title" href="/cubby_view.html?entryid=12777671&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor for 02/28/18</a><br><b>playing with the playdough</b> <a class="info" href="/cubby_view.html?entryid=12777671&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12769852&amp;saveit=Yes" class="preview"><span id="img-wrapper-4738738"><img data-info="4738738-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagmyMS1feFei" id="img4738738" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12769852"></a><a class="title" href="/cubby_view.html?entryid=12769852&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 02/28/18</a><br><b>the mommy is going on a horse ride!</b> <a class="info" href="/cubby_view.html?entryid=12769852&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12769735&amp;saveit=Yes" class="preview"><span id="img-wrapper-4738715"><img data-info="4738715-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagmyMS9SeFei" id="img4738715" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12769735"></a><a class="title" href="/cubby_view.html?entryid=12769735&amp;saveit=Yes">Approaches to Learning / Cognitive, Sensory for 02/28/18</a><br><b>playing with sensory bottles!</b> <a class="info" href="/cubby_view.html?entryid=12769735&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12749301&amp;saveit=Yes" class="preview"><span id="img-wrapper-4731374"><img data-info="4731374-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagm7NSlTeFei" id="img4731374" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12749301"></a><a class="title" href="/cubby_view.html?entryid=12749301&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Math, Music, Social / Emotional for 02/27/18</a><br><b>doing our shapes</b><br>circle time <a class="info" href="/cubby_view.html?entryid=12749301&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12749235&amp;saveit=Yes" class="preview"><span id="img-wrapper-4731339"><img data-info="4731339-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagm7NS1eeFei" id="img4731339" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12749235"></a><a class="title" href="/cubby_view.html?entryid=12749235&amp;saveit=Yes">02/27/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=12749235&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12748073&amp;saveit=Yes" class="preview"><span id="img-wrapper-4730804"><img data-info="4730804-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagm6Pi5TeFei" id="img4730804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12748073"></a><a class="title" href="/cubby_view.html?entryid=12748073&amp;saveit=Yes">Dramatic Play, Fine Motor, Social / Emotional for 02/27/18</a><br><b>sliding is fun</b> <a class="info" href="/cubby_view.html?entryid=12748073&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12746865&amp;saveit=Yes" class="preview"><span id="img-wrapper-4730341"><img data-info="4730341-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagm6NSpWeFei" id="img4730341" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12746865"></a><a class="title" href="/cubby_view.html?entryid=12746865&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development for 02/27/18</a><br><b>reading books</b> <a class="info" href="/cubby_view.html?entryid=12746865&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12746841&amp;saveit=Yes" class="preview"><span id="img-wrapper-4730335"><img data-info="4730335-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagm6NS1SeFei" id="img4730335" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12746841"></a><a class="title" href="/cubby_view.html?entryid=12746841&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication for 02/27/18</a><br><b>playing away this morning</b> <a class="info" href="/cubby_view.html?entryid=12746841&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12730868&amp;saveit=Yes" class="preview"><span id="img-wrapper-4728112"><img data-info="4728112-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagiyNy9VeFei" id="img4728112" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12730868"></a><a class="title" href="/cubby_view.html?entryid=12730868&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 02/26/18</a><br><b>snack time</b> <a class="info" href="/cubby_view.html?entryid=12730868&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12727820&amp;saveit=Yes" class="preview"><span id="img-wrapper-4724389"><img data-info="4724389-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagi-NSZeeFei" id="img4724389" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12727820"></a><a class="title" href="/cubby_view.html?entryid=12727820&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/26/18</a><br><b>reading books waiting for lunch</b> <a class="info" href="/cubby_view.html?entryid=12727820&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12726007&amp;saveit=Yes" class="preview"><span id="img-wrapper-4723234"><img data-info="4723234-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagi5NC1TeFei" id="img4723234" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12726007"></a><a class="title" href="/cubby_view.html?entryid=12726007&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/26/18</a><br><b>riding bikes</b> <a class="info" href="/cubby_view.html?entryid=12726007&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12725813&amp;saveit=Yes" class="preview"><span id="img-wrapper-4723138"><img data-info="4723138-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagi5Ny1feFei" id="img4723138" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12725813"></a><a class="title" href="/cubby_view.html?entryid=12725813&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor for 02/26/18</a><br><b>flying it around like a fresbie</b> <a class="info" href="/cubby_view.html?entryid=12725813&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12724751&amp;saveit=Yes" class="preview"><span id="img-wrapper-4722724"><img data-info="4722724-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagi4MSxTeFei" id="img4722724" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12724751"></a><a class="title" href="/cubby_view.html?entryid=12724751&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/26/18</a><br><b>being silly in the mirror</b> <a class="info" href="/cubby_view.html?entryid=12724751&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12709072&amp;saveit=Yes" class="preview"><span id="img-wrapper-4720470"><img data-info="4720470-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagi6MilXeFei" id="img4720470" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12709072"></a><a class="title" href="/cubby_view.html?entryid=12709072&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 02/23/18</a><br><b>play time</b> <a class="info" href="/cubby_view.html?entryid=12709072&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12689279&amp;saveit=Yes" class="preview"><span id="img-wrapper-4713462"><img data-info="4713462-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagu5MihVeFei" id="img4713462" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12689279"></a><a class="title" href="/cubby_view.html?entryid=12689279&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/22/18</a><br><b>art time</b> <a class="info" href="/cubby_view.html?entryid=12689279&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12683775&amp;saveit=Yes" class="preview"><span id="img-wrapper-4707952"><img data-info="4707952-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagq9PytVeFei" id="img4707952" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12683775"></a><a class="title" href="/cubby_view.html?entryid=12683775&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Music, Social / Emotional for 02/22/18</a><br><b>gym time</b> <a class="info" href="/cubby_view.html?entryid=12683775&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12682450&amp;saveit=Yes" class="preview"><span id="img-wrapper-4707434"><img data-info="4707434-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagq9Mi1TeFei" id="img4707434" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12682450"></a><a class="title" href="/cubby_view.html?entryid=12682450&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 02/22/18</a><br><b>playing with the cups</b> <a class="info" href="/cubby_view.html?entryid=12682450&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12667754&amp;saveit=Yes" class="preview"><span id="img-wrapper-4705543"><img data-info="4705543-90-0" src="https://www.lifecubby.me/i/rmrmJYwDagq_MypUeFei" id="img4705543" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12667754"></a><a class="title" href="/cubby_view.html?entryid=12667754&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, English Learner Development, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 02/21/18</a><br><b>art time</b><br>painting his toothbrush <a class="info" href="/cubby_view.html?entryid=12667754&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12660419&amp;saveit=Yes" class="preview"><span id="img-wrapper-4699305"><img data-info="4699305-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawOzNS5SeFei" id="img4699305" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12660419"></a><a class="title" href="/cubby_view.html?entryid=12660419&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/21/18</a><br><b>puzzle fun</b> <a class="info" href="/cubby_view.html?entryid=12660419&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12646470&amp;saveit=Yes" class="preview"><span id="img-wrapper-4698005"><img data-info="4698005-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawOyNi5SeFei" id="img4698005" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12646470"></a><a class="title" href="/cubby_view.html?entryid=12646470&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Social / Emotional for 02/20/18</a><br><b>how I brush my teeth</b> <a class="info" href="/cubby_view.html?entryid=12646470&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12640680&amp;saveit=Yes" class="preview"><span id="img-wrapper-4691944"><img data-info="4691944-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawO7PypTeFei" id="img4691944" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12640680"></a><a class="title" href="/cubby_view.html?entryid=12640680&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 02/20/18</a><br><b>gym fun</b> <a class="info" href="/cubby_view.html?entryid=12640680&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12639610&amp;saveit=Yes" class="preview"><span id="img-wrapper-4691478"><img data-info="4691478-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawO7MilfeFei" id="img4691478" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12639610"></a><a class="title" href="/cubby_view.html?entryid=12639610&amp;saveit=Yes">Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/20/18</a><br><b>playing in the kitchen</b> <a class="info" href="/cubby_view.html?entryid=12639610&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12638960&amp;saveit=Yes" class="preview"><span id="img-wrapper-4691301"><img data-info="4691301-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawO7NS5WeFei" id="img4691301" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12638960"></a><a class="title" href="/cubby_view.html?entryid=12638960&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Social / Emotional for 02/20/18</a><br><b>playing with friends</b> <a class="info" href="/cubby_view.html?entryid=12638960&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12625310&amp;saveit=Yes" class="preview"><span id="img-wrapper-4690310"><img data-info="4690310-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawO6NS9XeFei" id="img4690310" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12625310"></a><a class="title" href="/cubby_view.html?entryid=12625310&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, English Learner Development, Language / Vocal Communication, Social / Emotional for 02/19/18</a><br><b>sponge art</b> <a class="info" href="/cubby_view.html?entryid=12625310&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12622625&amp;saveit=Yes" class="preview"><span id="img-wrapper-4687014"><img data-info="4687014-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawK9Ni9TeFei" id="img4687014" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12622625"></a><a class="title" href="/cubby_view.html?entryid=12622625&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor, Math, Music, Print Literacy Development, Social / Emotional for 02/19/18</a><br><b>circle time</b><br>circle time <a class="info" href="/cubby_view.html?entryid=12622625&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12621608&amp;saveit=Yes" class="preview"><span id="img-wrapper-4686495"><img data-info="4686495-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawK8MidSeFei" id="img4686495" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12621608"></a><a class="title" href="/cubby_view.html?entryid=12621608&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/19/18</a><br><b>puzzle fun</b> <a class="info" href="/cubby_view.html?entryid=12621608&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12608581&amp;saveit=Yes" class="preview"><span id="img-wrapper-4680284"><img data-info="4680284-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawK6NCZTeFei" id="img4680284" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12608581"></a><a class="title" href="/cubby_view.html?entryid=12608581&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Math, Music, Print Literacy Development, Social / Emotional for 02/16/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=12608581&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12605968&amp;saveit=Yes" class="preview"><span id="img-wrapper-4679512"><img data-info="4679512-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaw2zMy9VeFei" id="img4679512" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12605968"></a><a class="title" href="/cubby_view.html?entryid=12605968&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 02/16/18</a><br><b>reading books</b> <a class="info" href="/cubby_view.html?entryid=12605968&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12572673&amp;saveit=Yes" class="preview"><span id="img-wrapper-4670355"><img data-info="4670355-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaw26NStSeFei" id="img4670355" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12572673"></a><a class="title" href="/cubby_view.html?entryid=12572673&amp;saveit=Yes">Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional, Sensory for 02/14/18</a><br><b>snowman!</b> <a class="info" href="/cubby_view.html?entryid=12572673&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12571630&amp;saveit=Yes" class="preview"><span id="img-wrapper-4669034"><img data-info="4669034-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawyzNi1TeFei" id="img4669034" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12571630"></a><a class="title" href="/cubby_view.html?entryid=12571630&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/14/18</a><br><b>Valentine's day party</b> <a class="info" href="/cubby_view.html?entryid=12571630&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12567099&amp;saveit=Yes" class="preview"><span id="img-wrapper-4663807"><img data-info="4663807-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawy5Pi5QeFei" id="img4663807" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12567099"></a><a class="title" href="/cubby_view.html?entryid=12567099&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Music, Social / Emotional for 02/14/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=12567099&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12565237&amp;saveit=Yes" class="preview"><span id="img-wrapper-4662953"><img data-info="4662953-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawy4PytUeFei" id="img4662953" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12565237"></a><a class="title" href="/cubby_view.html?entryid=12565237&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor for 02/14/18</a><br><b>puzzle time</b> <a class="info" href="/cubby_view.html?entryid=12565237&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12565112&amp;saveit=Yes" class="preview"><span id="img-wrapper-4662943"><img data-info="4662943-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawy4PypUeFei" id="img4662943" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12565112"></a><a class="title" href="/cubby_view.html?entryid=12565112&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 02/14/18</a><br><b>building a tower</b> <a class="info" href="/cubby_view.html?entryid=12565112&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12545819&amp;saveit=Yes" class="preview"><span id="img-wrapper-4656594"><img data-info="4656594-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaw-8MydTeFei" id="img4656594" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12545819"></a><a class="title" href="/cubby_view.html?entryid=12545819&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional, Sensory for 02/13/18</a><br><b>snow fun</b> <a class="info" href="/cubby_view.html?entryid=12545819&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12543682&amp;saveit=Yes" class="preview"><span id="img-wrapper-4655774"><img data-info="4655774-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaw-_MSlTeFei" id="img4655774" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12543682"></a><a class="title" href="/cubby_view.html?entryid=12543682&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 02/13/18</a><br><b>playing with the trucks</b> <a class="info" href="/cubby_view.html?entryid=12543682&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12529173&amp;saveit=Yes" class="preview"><span id="img-wrapper-4654461"><img data-info="4654461-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaw--MihWeFei" id="img4654461" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12529173"></a><a class="title" href="/cubby_view.html?entryid=12529173&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/12/18</a><br><b>stamping hearts</b> <a class="info" href="/cubby_view.html?entryid=12529173&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12504133&amp;saveit=Yes" class="preview"><span id="img-wrapper-4643029"><img data-info="4643029-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaw65NixeeFei" id="img4643029" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12504133"></a><a class="title" href="/cubby_view.html?entryid=12504133&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Math, Music, Print Literacy Development, Social / Emotional for 02/09/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=12504133&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12484551&amp;saveit=Yes" class="preview"><span id="img-wrapper-4635768"><img data-info="4635768-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawm_MShfeFei" id="img4635768" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12484551"></a><a class="title" href="/cubby_view.html?entryid=12484551&amp;saveit=Yes">02/08/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=12484551&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12466564&amp;saveit=Yes" class="preview"><span id="img-wrapper-4632158"><img data-info="4632158-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawm4NytfeFei" id="img4632158" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12466564"></a><a class="title" href="/cubby_view.html?entryid=12466564&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 02/07/18</a><br><b>snack</b> <a class="info" href="/cubby_view.html?entryid=12466564&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12459218&amp;saveit=Yes" class="preview"><span id="img-wrapper-4627034"><img data-info="4627034-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawi9Ni1TeFei" id="img4627034" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12459218"></a><a class="title" href="/cubby_view.html?entryid=12459218&amp;saveit=Yes">Dramatic Play, Social / Emotional for 02/07/18</a><br><b>car and truck fun</b> <a class="info" href="/cubby_view.html?entryid=12459218&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12446318&amp;saveit=Yes" class="preview"><span id="img-wrapper-4625627"><img data-info="4625627-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawi_MCxQeFei" id="img4625627" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12446318"></a><a class="title" href="/cubby_view.html?entryid=12446318&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 02/06/18</a><br><b>art time</b><br>the number 10 <a class="info" href="/cubby_view.html?entryid=12446318&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12445807&amp;saveit=Yes" class="preview"><span id="img-wrapper-4625055"><img data-info="4625055-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawi_NitSeFei" id="img4625055" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12445807"></a><a class="title" href="/cubby_view.html?entryid=12445807&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 02/06/18</a><br><b>snack time</b> <a class="info" href="/cubby_view.html?entryid=12445807&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12440649&amp;saveit=Yes" class="preview"><span id="img-wrapper-4620129"><img data-info="4620129-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawi6NyxeeFei" id="img4620129" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12440649"></a><a class="title" href="/cubby_view.html?entryid=12440649&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Music, Social / Emotional for 02/06/18</a><br><b>gym time</b><br>dancing and playing with the balls <a class="info" href="/cubby_view.html?entryid=12440649&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12419930&amp;saveit=Yes" class="preview"><span id="img-wrapper-4613541"><img data-info="4613541-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawu5MypWeFei" id="img4613541" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12419930"></a><a class="title" href="/cubby_view.html?entryid=12419930&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 02/05/18</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=12419930&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12419495&amp;saveit=Yes" class="preview"><span id="img-wrapper-4613326"><img data-info="4613326-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawu5NSxReFei" id="img4613326" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12419495"></a><a class="title" href="/cubby_view.html?entryid=12419495&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 02/05/18</a><br><b>puzzle fun</b> <a class="info" href="/cubby_view.html?entryid=12419495&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12417409&amp;saveit=Yes" class="preview"><span id="img-wrapper-4612596"><img data-info="4612596-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawu4MydReFei" id="img4612596" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12417409"></a><a class="title" href="/cubby_view.html?entryid=12417409&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Language / Vocal Communication, Social / Emotional for 02/05/18</a><br><b>reading is fun</b> <a class="info" href="/cubby_view.html?entryid=12417409&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12403568&amp;saveit=Yes" class="preview"><span id="img-wrapper-4611011"><img data-info="4611011-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawu7Ni9WeFei" id="img4611011" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12403568"></a><a class="title" href="/cubby_view.html?entryid=12403568&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Dramatic Play, Social / Emotional for 02/02/18</a><br><b>fish tank art</b> <a class="info" href="/cubby_view.html?entryid=12403568&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12402131&amp;saveit=Yes" class="preview"><span id="img-wrapper-4609175"><img data-info="4609175-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawqzNylSeFei" id="img4609175" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12402131"></a><a class="title" href="/cubby_view.html?entryid=12402131&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Math, Music, Print Literacy Development, Social / Emotional for 02/02/18</a><br><b>circle time</b><br>circle time <a class="info" href="/cubby_view.html?entryid=12402131&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12398028&amp;saveit=Yes" class="preview"><span id="img-wrapper-4605330"><img data-info="4605330-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawq_NS1XeFei" id="img4605330" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12398028"></a><a class="title" href="/cubby_view.html?entryid=12398028&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 02/02/18</a><br><b>gym time</b> <a class="info" href="/cubby_view.html?entryid=12398028&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12396695&amp;saveit=Yes" class="preview"><span id="img-wrapper-4604907"><img data-info="4604907-90-0" src="https://www.lifecubby.me/i/rmrmJYwDawq-Py5QeFei" id="img4604907" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12396695"></a><a class="title" href="/cubby_view.html?entryid=12396695&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 02/02/18</a><br><b>puzzles!!!!</b><br>puzzle time <a class="info" href="/cubby_view.html?entryid=12396695&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12379159&amp;saveit=Yes" class="preview"><span id="img-wrapper-4598786"><img data-info="4598786-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAOyMSZReFei" id="img4598786" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12379159"></a><a class="title" href="/cubby_view.html?entryid=12379159&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 02/01/18</a><br><b>reading books before lunch</b><br>book time <a class="info" href="/cubby_view.html?entryid=12379159&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12354648&amp;saveit=Yes" class="preview"><span id="img-wrapper-4589811"><img data-info="4589811-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAKzPi9WeFei" id="img4589811" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12354648"></a><a class="title" href="/cubby_view.html?entryid=12354648&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Math for 01/31/18</a><br><b>counting the sensory bottles</b><br>counting away <a class="info" href="/cubby_view.html?entryid=12354648&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12339713&amp;saveit=Yes" class="preview"><span id="img-wrapper-4588589"><img data-info="4588589-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAKyMyZeeFei" id="img4588589" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12339713"></a><a class="title" href="/cubby_view.html?entryid=12339713&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, English Learner Development, Language / Vocal Communication for 01/30/18</a><br><b>coloring fun</b> <a class="info" href="/cubby_view.html?entryid=12339713&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12335662&amp;saveit=Yes" class="preview"><span id="img-wrapper-4583823"><img data-info="4583823-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAK5PixUeFei" id="img4583823" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12335662"></a><a class="title" href="/cubby_view.html?entryid=12335662&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Music for 01/30/18</a><br><b>singing songs waiting for food</b><br>lunch <a class="info" href="/cubby_view.html?entryid=12335662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12333981&amp;saveit=Yes" class="preview"><span id="img-wrapper-4582710"><img data-info="4582710-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAK4MS9XeFei" id="img4582710" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12333981"></a><a class="title" href="/cubby_view.html?entryid=12333981&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/30/18</a><br><b>having fun in the gym</b><br>cones!!!! <a class="info" href="/cubby_view.html?entryid=12333981&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12311988&amp;saveit=Yes" class="preview"><span id="img-wrapper-4575423"><img data-info="4575423-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA2_MixUeFei" id="img4575423" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12311988"></a><a class="title" href="/cubby_view.html?entryid=12311988&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/29/18</a><br><b>gym time</b><br>running around with the ball <a class="info" href="/cubby_view.html?entryid=12311988&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12311484&amp;saveit=Yes" class="preview"><span id="img-wrapper-4575158"><img data-info="4575158-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA2_NytfeFei" id="img4575158" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12311484"></a><a class="title" href="/cubby_view.html?entryid=12311484&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/29/18</a><br><b>enjoying the gym time</b><br>gym time <a class="info" href="/cubby_view.html?entryid=12311484&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12311442&amp;saveit=Yes" class="preview"><span id="img-wrapper-4575158"><img data-info="4575158-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA2_NytfeFei" id="img4575158" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12311442"></a><a class="title" href="/cubby_view.html?entryid=12311442&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/29/18</a><br><b>enjoying the gym time</b><br>gym time <a class="info" href="/cubby_view.html?entryid=12311442&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12295547&amp;saveit=Yes" class="preview"><span id="img-wrapper-4572825"><img data-info="4572825-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA24PixSeFei" id="img4572825" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12295547"></a><a class="title" href="/cubby_view.html?entryid=12295547&amp;saveit=Yes">Art, Fine Motor, Math for 01/26/18</a><br><b>blue oval art!</b> <a class="info" href="/cubby_view.html?entryid=12295547&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12288800&amp;saveit=Yes" class="preview"><span id="img-wrapper-4566993"><img data-info="4566993-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAy8PydUeFei" id="img4566993" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12288800"></a><a class="title" href="/cubby_view.html?entryid=12288800&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional, Sensory for 01/26/18</a><br><b>look at my cool tower!</b> <a class="info" href="/cubby_view.html?entryid=12288800&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12253684&amp;saveit=Yes" class="preview"><span id="img-wrapper-4558553"><img data-info="4558553-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA-yMytUeFei" id="img4558553" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12253684"></a><a class="title" href="/cubby_view.html?entryid=12253684&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 01/24/18</a><br><b>nest art</b> <a class="info" href="/cubby_view.html?entryid=12253684&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12246399&amp;saveit=Yes" class="preview"><span id="img-wrapper-4552542"><img data-info="4552542-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA-4MypVeFei" id="img4552542" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12246399"></a><a class="title" href="/cubby_view.html?entryid=12246399&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/24/18</a><br><b>making a house</b> <a class="info" href="/cubby_view.html?entryid=12246399&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12246341&amp;saveit=Yes" class="preview"><span id="img-wrapper-4552524"><img data-info="4552524-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA-4MyxTeFei" id="img4552524" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12246341"></a><a class="title" href="/cubby_view.html?entryid=12246341&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/24/18</a><br><b>making towers</b> <a class="info" href="/cubby_view.html?entryid=12246341&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12246281&amp;saveit=Yes" class="preview"><span id="img-wrapper-4552502"><img data-info="4552502-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA-4My5VeFei" id="img4552502" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12246281"></a><a class="title" href="/cubby_view.html?entryid=12246281&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 01/24/18</a><br><b>reading books</b> <a class="info" href="/cubby_view.html?entryid=12246281&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12231151&amp;saveit=Yes" class="preview"><span id="img-wrapper-4550598"><img data-info="4550598-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA-6MydfeFei" id="img4550598" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12231151"></a><a class="title" href="/cubby_view.html?entryid=12231151&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 01/23/18</a><br><b>art time</b><br>Letter W <a class="info" href="/cubby_view.html?entryid=12231151&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12226511&amp;saveit=Yes" class="preview"><span id="img-wrapper-4545716"><img data-info="4545716-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA6_MS9ReFei" id="img4545716" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12226511"></a><a class="title" href="/cubby_view.html?entryid=12226511&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor for 01/23/18</a><br><b>playing outside</b> <a class="info" href="/cubby_view.html?entryid=12226511&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12210358&amp;saveit=Yes" class="preview"><span id="img-wrapper-4543653"><img data-info="4543653-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA65MCtUeFei" id="img4543653" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12210358"></a><a class="title" href="/cubby_view.html?entryid=12210358&amp;saveit=Yes">01/22/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=12210358&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12210172&amp;saveit=Yes" class="preview"><span id="img-wrapper-4543461"><img data-info="4543461-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA65MihWeFei" id="img4543461" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12210172"></a><a class="title" href="/cubby_view.html?entryid=12210172&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/22/18</a><br><b>outside fun time</b> <a class="info" href="/cubby_view.html?entryid=12210172&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12209428&amp;saveit=Yes" class="preview"><span id="img-wrapper-4542821"><img data-info="4542821-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaA64PixWeFei" id="img4542821" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12209428"></a><a class="title" href="/cubby_view.html?entryid=12209428&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Health / Safety / Nutrition, Social / Emotional for 01/22/18</a><br><b>snack time is a good time</b> <a class="info" href="/cubby_view.html?entryid=12209428&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12186315&amp;saveit=Yes" class="preview"><span id="img-wrapper-4533576"><img data-info="4533576-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAm5MylReFei" id="img4533576" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12186315"></a><a class="title" href="/cubby_view.html?entryid=12186315&amp;saveit=Yes">Large Motor, Music for 01/19/18</a><br><b>Having a super fun dance party!</b> <a class="info" href="/cubby_view.html?entryid=12186315&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12185832&amp;saveit=Yes" class="preview"><span id="img-wrapper-4532816"><img data-info="4532816-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAm4Pi9ReFei" id="img4532816" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12185832"></a><a class="title" href="/cubby_view.html?entryid=12185832&amp;saveit=Yes">Dramatic Play, Social / Emotional for 01/19/18</a><br><b>Sebastian, the snowman was alive as he could be!</b> <a class="info" href="/cubby_view.html?entryid=12185832&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12163930&amp;saveit=Yes" class="preview"><span id="img-wrapper-4524129"><img data-info="4524129-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAi-NyxeeFei" id="img4524129" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12163930"></a><a class="title" href="/cubby_view.html?entryid=12163930&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Print Literacy Development, Social / Emotional for 01/18/18</a><br><b>practicing writing my name</b> <a class="info" href="/cubby_view.html?entryid=12163930&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12163881&amp;saveit=Yes" class="preview"><span id="img-wrapper-4524100"><img data-info="4524100-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAi-Ny5XeFei" id="img4524100" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12163881"></a><a class="title" href="/cubby_view.html?entryid=12163881&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor, Social / Emotional, Sensory for 01/18/18</a><br><b>drawing my turtle friends</b> <a class="info" href="/cubby_view.html?entryid=12163881&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12148583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4521737"><img data-info="4521737-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAi7MS1QeFei" id="img4521737" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12148583"></a><a class="title" href="/cubby_view.html?entryid=12148583&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor, Social / Emotional for 01/17/18</a><br><b>looking for trucks we like!</b> <a class="info" href="/cubby_view.html?entryid=12148583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12148560&amp;saveit=Yes" class="preview"><span id="img-wrapper-4521698"><img data-info="4521698-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAi7MCdfeFei" id="img4521698" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12148560"></a><a class="title" href="/cubby_view.html?entryid=12148560&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/17/18</a><br><b>found my firetruck!</b> <a class="info" href="/cubby_view.html?entryid=12148560&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12144734&amp;saveit=Yes" class="preview"><span id="img-wrapper-4517804"><img data-info="4517804-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAu9Pi5TeFei" id="img4517804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12144734"></a><a class="title" href="/cubby_view.html?entryid=12144734&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 01/17/18</a><br><b>flash cards!</b> <a class="info" href="/cubby_view.html?entryid=12144734&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12144085&amp;saveit=Yes" class="preview"><span id="img-wrapper-4517495"><img data-info="4517495-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAu9MidSeFei" id="img4517495" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12144085"></a><a class="title" href="/cubby_view.html?entryid=12144085&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication for 01/17/18</a><br><b>got my favorite ball!</b> <a class="info" href="/cubby_view.html?entryid=12144085&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12130763&amp;saveit=Yes" class="preview"><span id="img-wrapper-4515952"><img data-info="4515952-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAu_PytVeFei" id="img4515952" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12130763"></a><a class="title" href="/cubby_view.html?entryid=12130763&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Music, Social / Emotional for 01/16/18</a><br><b>singing songs with Ms Darian</b> <a class="info" href="/cubby_view.html?entryid=12130763&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12130493&amp;saveit=Yes" class="preview"><span id="img-wrapper-4515632"><img data-info="4515632-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAu_MC1VeFei" id="img4515632" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12130493"></a><a class="title" href="/cubby_view.html?entryid=12130493&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 01/16/18</a><br><b>gym fun</b> <a class="info" href="/cubby_view.html?entryid=12130493&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12101746&amp;saveit=Yes" class="preview"><span id="img-wrapper-4505265"><img data-info="4505265-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaAq_NChSeFei" id="img4505265" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12101746"></a><a class="title" href="/cubby_view.html?entryid=12101746&amp;saveit=Yes">Dramatic Play, Fine Motor, Social / Emotional for 01/12/18</a><br><b>Puzzles are SO fun!!!</b> <a class="info" href="/cubby_view.html?entryid=12101746&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12078456&amp;saveit=Yes" class="preview"><span id="img-wrapper-4493068"><img data-info="4493068-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQO5NihfeFei" id="img4493068" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12078456"></a><a class="title" href="/cubby_view.html?entryid=12078456&amp;saveit=Yes">01/11/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=12078456&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12078294&amp;saveit=Yes" class="preview"><span id="img-wrapper-4492982"><img data-info="4492982-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQO4PyZVeFei" id="img4492982" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12078294"></a><a class="title" href="/cubby_view.html?entryid=12078294&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Music, Print Literacy Development, Social / Emotional for 01/11/18</a><br><b>circle time with Ms Tehya!</b> <a class="info" href="/cubby_view.html?entryid=12078294&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12057795&amp;saveit=Yes" class="preview"><span id="img-wrapper-4485728"><img data-info="4485728-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQK_MSxfeFei" id="img4485728" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12057795"></a><a class="title" href="/cubby_view.html?entryid=12057795&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 01/10/18</a><br><b>10 little monkeys jumping on the bed!</b> <a class="info" href="/cubby_view.html?entryid=12057795&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12057558&amp;saveit=Yes" class="preview"><span id="img-wrapper-4485599"><img data-info="4485599-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQK_MydeeFei" id="img4485599" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12057558"></a><a class="title" href="/cubby_view.html?entryid=12057558&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Music, Social / Emotional for 01/10/18</a><br><b>The Big kids came to sing to us !</b> <a class="info" href="/cubby_view.html?entryid=12057558&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12055734&amp;saveit=Yes" class="preview"><span id="img-wrapper-4484788"><img data-info="4484788-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQK-MSZfeFei" id="img4484788" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12055734"></a><a class="title" href="/cubby_view.html?entryid=12055734&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Math, Social / Emotional for 01/10/18</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=12055734&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12033474&amp;saveit=Yes" class="preview"><span id="img-wrapper-4476557"><img data-info="4476557-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ28MytQeFei" id="img4476557" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12033474"></a><a class="title" href="/cubby_view.html?entryid=12033474&amp;saveit=Yes">Dramatic Play, Fine Motor, Social / Emotional for 01/09/18</a><br><b>Racing cars together</b> <a class="info" href="/cubby_view.html?entryid=12033474&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=12018829&amp;saveit=Yes" class="preview"><span id="img-wrapper-4474774"><img data-info="4474774-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ2-MSlTeFei" id="img4474774" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="12018829"></a><a class="title" href="/cubby_view.html?entryid=12018829&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 01/08/18</a><br><b>gym time today!</b> <a class="info" href="/cubby_view.html?entryid=12018829&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11999206&amp;saveit=Yes" class="preview"><span id="img-wrapper-4468688"><img data-info="4468688-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQyyMCZfeFei" id="img4468688" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11999206"></a><a class="title" href="/cubby_view.html?entryid=11999206&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication, Social / Emotional for 01/05/18</a><br><b>art time</b><br>painting a owl <a class="info" href="/cubby_view.html?entryid=11999206&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11981693&amp;saveit=Yes" class="preview"><span id="img-wrapper-4461916"><img data-info="4461916-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQy7Py9ReFei" id="img4461916" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11981693"></a><a class="title" href="/cubby_view.html?entryid=11981693&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Dramatic Play, English Learner Development, Language / Vocal Communication, Social / Emotional for 01/04/18</a><br><b>slim time</b> <a class="info" href="/cubby_view.html?entryid=11981693&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11978056&amp;saveit=Yes" class="preview"><span id="img-wrapper-4458422"><img data-info="4458422-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ-yMixVeFei" id="img4458422" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11978056"></a><a class="title" href="/cubby_view.html?entryid=11978056&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor, Math, Social / Emotional for 01/04/18</a><br><b>circle time</b><br>counting away <a class="info" href="/cubby_view.html?entryid=11978056&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11976468&amp;saveit=Yes" class="preview"><span id="img-wrapper-4457769"><img data-info="4457769-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ-9MSheeFei" id="img4457769" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11976468"></a><a class="title" href="/cubby_view.html?entryid=11976468&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Large Motor, Social / Emotional for 01/04/18</a><br><b>waiting for miss Rose to throw me the ball!</b> <a class="info" href="/cubby_view.html?entryid=11976468&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11960162&amp;saveit=Yes" class="preview"><span id="img-wrapper-4451698"><img data-info="4451698-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ-7MCdfeFei" id="img4451698" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11960162"></a><a class="title" href="/cubby_view.html?entryid=11960162&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Large Motor, Social / Emotional for 01/03/18</a><br><b>I like pizza!</b> <a class="info" href="/cubby_view.html?entryid=11960162&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11926989&amp;saveit=Yes" class="preview"><span id="img-wrapper-4442548"><img data-info="4442548-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ64MypfeFei" id="img4442548" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11926989"></a><a class="title" href="/cubby_view.html?entryid=11926989&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/28/17</a><br><b>circle time !</b> <a class="info" href="/cubby_view.html?entryid=11926989&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11926965&amp;saveit=Yes" class="preview"><span id="img-wrapper-4442548"><img data-info="4442548-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQ64MypfeFei" id="img4442548" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11926965"></a><a class="title" href="/cubby_view.html?entryid=11926965&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/28/17</a><br><b>circle time !</b> <a class="info" href="/cubby_view.html?entryid=11926965&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11918684&amp;saveit=Yes" class="preview"><span id="img-wrapper-4439820"><img data-info="4439820-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQmzPixXeFei" id="img4439820" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11918684"></a><a class="title" href="/cubby_view.html?entryid=11918684&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Music, Social / Emotional for 12/28/17</a><br><b>dancing in the gym this morning with elephant Friends!</b> <a class="info" href="/cubby_view.html?entryid=11918684&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11911540&amp;saveit=Yes" class="preview"><span id="img-wrapper-4439019"><img data-info="4439019-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQmzNi9eeFei" id="img4439019" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11911540"></a><a class="title" href="/cubby_view.html?entryid=11911540&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/27/17</a><br><b>Jumping up and down in the gym!</b> <a class="info" href="/cubby_view.html?entryid=11911540&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11909303&amp;saveit=Yes" class="preview"><span id="img-wrapper-4437257"><img data-info="4437257-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQm9NCtQeFei" id="img4437257" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11909303"></a><a class="title" href="/cubby_view.html?entryid=11909303&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/27/17</a><br><b>gym time fun</b> <a class="info" href="/cubby_view.html?entryid=11909303&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11909077&amp;saveit=Yes" class="preview"><span id="img-wrapper-4437177"><img data-info="4437177-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQm9NylQeFei" id="img4437177" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11909077"></a><a class="title" href="/cubby_view.html?entryid=11909077&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/27/17</a><br><b>cone buddies!</b> <a class="info" href="/cubby_view.html?entryid=11909077&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11897376&amp;saveit=Yes" class="preview"><span id="img-wrapper-4434590"><img data-info="4434590-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQm-MydXeFei" id="img4434590" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11897376"></a><a class="title" href="/cubby_view.html?entryid=11897376&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication for 12/22/17</a><br><b>Christmas party</b> <a class="info" href="/cubby_view.html?entryid=11897376&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11894943&amp;saveit=Yes" class="preview"><span id="img-wrapper-4431726"><img data-info="4431726-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQm7MSxReFei" id="img4431726" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11894943"></a><a class="title" href="/cubby_view.html?entryid=11894943&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 12/22/17</a><br><b>Christmas presents!</b> <a class="info" href="/cubby_view.html?entryid=11894943&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11894830&amp;saveit=Yes" class="preview"><span id="img-wrapper-4431674"><img data-info="4431674-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQm7MClTeFei" id="img4431674" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11894830"></a><a class="title" href="/cubby_view.html?entryid=11894830&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 12/22/17</a><br><b>Christmas present time</b> <a class="info" href="/cubby_view.html?entryid=11894830&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11862623&amp;saveit=Yes" class="preview"><span id="img-wrapper-4420954"><img data-info="4420954-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQi6PytTeFei" id="img4420954" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11862623"></a><a class="title" href="/cubby_view.html?entryid=11862623&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/20/17</a><br><b>I get excited about circle time</b> <a class="info" href="/cubby_view.html?entryid=11862623&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11823184&amp;saveit=Yes" class="preview"><span id="img-wrapper-4408509"><img data-info="4408509-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQqyMy5eeFei" id="img4408509" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11823184"></a><a class="title" href="/cubby_view.html?entryid=11823184&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 12/18/17</a><br><b>enjoying time outside this morning!</b> <a class="info" href="/cubby_view.html?entryid=11823184&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402993"><img data-info="4402993-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PydUeFei" id="img4402993" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805589"></a><a class="title" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>flash card fun!</b> <a class="info" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402879"><img data-info="4402879-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PileeFei" id="img4402879" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805354"></a><a class="title" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402127"><img data-info="4402127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4NyxQeFei" id="img4402127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11803602"></a><a class="title" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/15/17</a><br><b>gym time with our leopard and elephant friends</b> <a class="info" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" class="preview"><span id="img-wrapper-4395548"><img data-info="4395548-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgO_MypfeFei" id="img4395548" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11783359"></a><a class="title" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/14/17</a><br><b>playing zoo</b> <a class="info" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" class="preview"><span id="img-wrapper-4380952"><img data-info="4380952-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgK6PytVeFei" id="img4380952" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11728776"></a><a class="title" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/11/17</a><br><b>recess this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402993"><img data-info="4402993-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PydUeFei" id="img4402993" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805589"></a><a class="title" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>flash card fun!</b> <a class="info" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402879"><img data-info="4402879-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PileeFei" id="img4402879" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805354"></a><a class="title" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402127"><img data-info="4402127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4NyxQeFei" id="img4402127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11803602"></a><a class="title" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/15/17</a><br><b>gym time with our leopard and elephant friends</b> <a class="info" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" class="preview"><span id="img-wrapper-4395548"><img data-info="4395548-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgO_MypfeFei" id="img4395548" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11783359"></a><a class="title" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/14/17</a><br><b>playing zoo</b> <a class="info" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" class="preview"><span id="img-wrapper-4380952"><img data-info="4380952-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgK6PytVeFei" id="img4380952" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11728776"></a><a class="title" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/11/17</a><br><b>recess this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402993"><img data-info="4402993-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PydUeFei" id="img4402993" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805589"></a><a class="title" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>flash card fun!</b> <a class="info" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402879"><img data-info="4402879-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PileeFei" id="img4402879" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805354"></a><a class="title" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402127"><img data-info="4402127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4NyxQeFei" id="img4402127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11803602"></a><a class="title" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/15/17</a><br><b>gym time with our leopard and elephant friends</b> <a class="info" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" class="preview"><span id="img-wrapper-4395548"><img data-info="4395548-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgO_MypfeFei" id="img4395548" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11783359"></a><a class="title" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/14/17</a><br><b>playing zoo</b> <a class="info" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" class="preview"><span id="img-wrapper-4380952"><img data-info="4380952-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgK6PytVeFei" id="img4380952" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11728776"></a><a class="title" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/11/17</a><br><b>recess this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402993"><img data-info="4402993-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PydUeFei" id="img4402993" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805589"></a><a class="title" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>flash card fun!</b> <a class="info" href="/cubby_view.html?entryid=11805589&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402879"><img data-info="4402879-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4PileeFei" id="img4402879" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11805354"></a><a class="title" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/15/17</a><br><b>circle time</b> <a class="info" href="/cubby_view.html?entryid=11805354&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" class="preview"><span id="img-wrapper-4402127"><img data-info="4402127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDaQq4NyxQeFei" id="img4402127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11803602"></a><a class="title" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/15/17</a><br><b>gym time with our leopard and elephant friends</b> <a class="info" href="/cubby_view.html?entryid=11803602&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" class="preview"><span id="img-wrapper-4395548"><img data-info="4395548-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgO_MypfeFei" id="img4395548" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11783359"></a><a class="title" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/14/17</a><br><b>playing zoo</b> <a class="info" href="/cubby_view.html?entryid=11783359&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" class="preview"><span id="img-wrapper-4380952"><img data-info="4380952-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgK6PytVeFei" id="img4380952" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11728776"></a><a class="title" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/11/17</a><br><b>recess this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11728776&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11724353&amp;saveit=Yes" class="preview"><span id="img-wrapper-4376919"><img data-info="4376919-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg28Py9eeFei" id="img4376919" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11724353"></a><a class="title" href="/cubby_view.html?entryid=11724353&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/11/17</a><br><b>leaf fun !</b> <a class="info" href="/cubby_view.html?entryid=11724353&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11702562&amp;saveit=Yes" class="preview"><span id="img-wrapper-4370428"><img data-info="4370428-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg26MixfeFei" id="img4370428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11702562"></a><a class="title" href="/cubby_view.html?entryid=11702562&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 12/08/17</a><br><b>sayyyy chhhheeeessseeeeee</b> <a class="info" href="/cubby_view.html?entryid=11702562&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11702089&amp;saveit=Yes" class="preview"><span id="img-wrapper-4370328"><img data-info="4370328-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg26NSxfeFei" id="img4370328" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11702089"></a><a class="title" href="/cubby_view.html?entryid=11702089&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Social / Emotional for 12/08/17</a><br><b>hellooooo!</b> <a class="info" href="/cubby_view.html?entryid=11702089&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11684329&amp;saveit=Yes" class="preview"><span id="img-wrapper-4364507"><img data-info="4364507-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgy-My5QeFei" id="img4364507" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11684329"></a><a class="title" href="/cubby_view.html?entryid=11684329&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/07/17</a><br><b>my favorite sensory toy</b> <a class="info" href="/cubby_view.html?entryid=11684329&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11683609&amp;saveit=Yes" class="preview"><span id="img-wrapper-4364221"><img data-info="4364221-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgy-NCxWeFei" id="img4364221" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11683609"></a><a class="title" href="/cubby_view.html?entryid=11683609&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/07/17</a><br><b>gym fun</b> <a class="info" href="/cubby_view.html?entryid=11683609&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11661260&amp;saveit=Yes" class="preview"><span id="img-wrapper-4357145"><img data-info="4357145-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg-9NypSeFei" id="img4357145" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11661260"></a><a class="title" href="/cubby_view.html?entryid=11661260&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 12/06/17</a><br><b>it's a fire truck Manda!</b> <a class="info" href="/cubby_view.html?entryid=11661260&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11646982&amp;saveit=Yes" class="preview"><span id="img-wrapper-4355563"><img data-info="4355563-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg-_MyhUeFei" id="img4355563" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11646982"></a><a class="title" href="/cubby_view.html?entryid=11646982&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/05/17</a><br><b>coloring fun !</b> <a class="info" href="/cubby_view.html?entryid=11646982&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11643401&amp;saveit=Yes" class="preview"><span id="img-wrapper-4351381"><img data-info="4351381-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg-7NSZWeFei" id="img4351381" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11643401"></a><a class="title" href="/cubby_view.html?entryid=11643401&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 12/05/17</a><br><b>trucks and books</b> <a class="info" href="/cubby_view.html?entryid=11643401&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11626106&amp;saveit=Yes" class="preview"><span id="img-wrapper-4348441"><img data-info="4348441-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg6yMipWeFei" id="img4348441" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11626106"></a><a class="title" href="/cubby_view.html?entryid=11626106&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional, Sensory for 12/04/17</a><br><b>putting the chicken together on my own</b> <a class="info" href="/cubby_view.html?entryid=11626106&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11605838&amp;saveit=Yes" class="preview"><span id="img-wrapper-4342225"><img data-info="4342225-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg64NCxSeFei" id="img4342225" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11605838"></a><a class="title" href="/cubby_view.html?entryid=11605838&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor for 12/01/17</a><br><b>loving the slide</b> <a class="info" href="/cubby_view.html?entryid=11605838&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Kangaroos , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11605452&amp;saveit=Yes" class="preview"><span id="img-wrapper-4341835"><img data-info="4341835-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg67Pi1SeFei" id="img4341835" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11605452"></a><a class="title" href="/cubby_view.html?entryid=11605452&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 12/01/17</a><br><b>Sebastians bday treats!</b> <a class="info" href="/cubby_view.html?entryid=11605452&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11604826&amp;saveit=Yes" class="preview"><span id="img-wrapper-4341349"><img data-info="4341349-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbg67NSpeeFei" id="img4341349" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11604826"></a><a class="title" href="/cubby_view.html?entryid=11604826&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 12/01/17</a><br><b>enjoying birthday treats</b> <a class="info" href="/cubby_view.html?entryid=11604826&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11578867&amp;saveit=Yes" class="preview"><span id="img-wrapper-4330614"><img data-info="4330614-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgm6MC9TeFei" id="img4330614" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11578867"></a><a class="title" href="/cubby_view.html?entryid=11578867&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 11/30/17</a><br><b>bikes!</b> <a class="info" href="/cubby_view.html?entryid=11578867&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11578740&amp;saveit=Yes" class="preview"><span id="img-wrapper-4330584"><img data-info="4330584-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgm6MyZTeFei" id="img4330584" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11578740"></a><a class="title" href="/cubby_view.html?entryid=11578740&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 11/30/17</a><br><b>bikes!</b> <a class="info" href="/cubby_view.html?entryid=11578740&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11558741&amp;saveit=Yes" class="preview"><span id="img-wrapper-4324629"><img data-info="4324629-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgi-MCxeeFei" id="img4324629" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11558741"></a><a class="title" href="/cubby_view.html?entryid=11558741&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Math for 11/29/17</a><br><b>puzzles!</b> <a class="info" href="/cubby_view.html?entryid=11558741&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11557571&amp;saveit=Yes" class="preview"><span id="img-wrapper-4324273"><img data-info="4324273-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgi-NClUeFei" id="img4324273" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11557571"></a><a class="title" href="/cubby_view.html?entryid=11557571&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional, Sensory for 11/29/17</a><br><b>building towers this morning!</b> <a class="info" href="/cubby_view.html?entryid=11557571&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11557232&amp;saveit=Yes" class="preview"><span id="img-wrapper-4324182"><img data-info="4324182-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgi-NyZVeFei" id="img4324182" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11557232"></a><a class="title" href="/cubby_view.html?entryid=11557232&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 11/29/17</a><br><b>talking about building towers</b> <a class="info" href="/cubby_view.html?entryid=11557232&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11543466&amp;saveit=Yes" class="preview"><span id="img-wrapper-4323125"><img data-info="4323125-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgi5NyxSeFei" id="img4323125" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11543466"></a><a class="title" href="/cubby_view.html?entryid=11543466&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 11/28/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=11543466&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11543435&amp;saveit=Yes" class="preview"><span id="img-wrapper-4323114"><img data-info="4323114-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgi5Ny9TeFei" id="img4323114" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11543435"></a><a class="title" href="/cubby_view.html?entryid=11543435&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 11/28/17</a><br><b>building towers!!</b> <a class="info" href="/cubby_view.html?entryid=11543435&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11537793&amp;saveit=Yes" class="preview"><span id="img-wrapper-4318170"><img data-info="4318170-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbguyNylXeFei" id="img4318170" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11537793"></a><a class="title" href="/cubby_view.html?entryid=11537793&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/28/17</a><br><b>riding my favorite bike</b> <a class="info" href="/cubby_view.html?entryid=11537793&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4311975"><img data-info="4311975-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgu7PylSeFei" id="img4311975" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11514984"></a><a class="title" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/27/17</a><br><b>mmmm yummy food</b> <a class="info" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" class="preview"><span id="img-wrapper-4302565"><img data-info="4302565-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq4MyhSeFei" id="img4302565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11483802"></a><a class="title" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes">Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 11/21/17</a><br><b>Thanksgiving Feast!</b> <a class="info" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301903"><img data-info="4301903-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7Py5UeFei" id="img4301903" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482744"></a><a class="title" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>very into the story!</b> <a class="info" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301878"><img data-info="4301878-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7PilfeFei" id="img4301878" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482662"></a><a class="title" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>story time!</b> <a class="info" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" class="preview"><span id="img-wrapper-4295611"><img data-info="4295611-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO_MC9WeFei" id="img4295611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11463816"></a><a class="title" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Science, Social / Emotional for 11/20/17</a><br><b>outside fun</b> <a class="info" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4311975"><img data-info="4311975-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgu7PylSeFei" id="img4311975" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11514984"></a><a class="title" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/27/17</a><br><b>mmmm yummy food</b> <a class="info" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" class="preview"><span id="img-wrapper-4302565"><img data-info="4302565-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq4MyhSeFei" id="img4302565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11483802"></a><a class="title" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes">Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 11/21/17</a><br><b>Thanksgiving Feast!</b> <a class="info" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301903"><img data-info="4301903-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7Py5UeFei" id="img4301903" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482744"></a><a class="title" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>very into the story!</b> <a class="info" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301878"><img data-info="4301878-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7PilfeFei" id="img4301878" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482662"></a><a class="title" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>story time!</b> <a class="info" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" class="preview"><span id="img-wrapper-4295611"><img data-info="4295611-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO_MC9WeFei" id="img4295611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11463816"></a><a class="title" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Science, Social / Emotional for 11/20/17</a><br><b>outside fun</b> <a class="info" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11448934&amp;saveit=Yes" class="preview"><span id="img-wrapper-4293406"><img data-info="4293406-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO5Mi5ReFei" id="img4293406" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11448934"></a><a class="title" href="/cubby_view.html?entryid=11448934&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor for 11/17/17</a><br><b>finishing our turkeys</b> <a class="info" href="/cubby_view.html?entryid=11448934&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11425836&amp;saveit=Yes" class="preview"><span id="img-wrapper-4283274"><img data-info="4283274-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwK5NClTeFei" id="img4283274" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11425836"></a><a class="title" href="/cubby_view.html?entryid=11425836&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition, Social / Emotional for 11/16/17</a><br><b>ready for lunch!</b> <a class="info" href="/cubby_view.html?entryid=11425836&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11408342&amp;saveit=Yes" class="preview"><span id="img-wrapper-4280011"><img data-info="4280011-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwK6Ni9WeFei" id="img4280011" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11408342"></a><a class="title" href="/cubby_view.html?entryid=11408342&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor, Social / Emotional, Sensory for 11/15/17</a><br><b>chalk art</b> <a class="info" href="/cubby_view.html?entryid=11408342&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11402258&amp;saveit=Yes" class="preview"><span id="img-wrapper-4274899"><img data-info="4274899-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw2-PideeFei" id="img4274899" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11402258"></a><a class="title" href="/cubby_view.html?entryid=11402258&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 11/15/17</a><br><b>gym time fun</b> <a class="info" href="/cubby_view.html?entryid=11402258&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11386976&amp;saveit=Yes" class="preview"><span id="img-wrapper-4272592"><img data-info="4272592-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw24MydVeFei" id="img4272592" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11386976"></a><a class="title" href="/cubby_view.html?entryid=11386976&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 11/14/17</a><br><b>Happy Birthday Josie!</b> <a class="info" href="/cubby_view.html?entryid=11386976&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4311975"><img data-info="4311975-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgu7PylSeFei" id="img4311975" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11514984"></a><a class="title" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/27/17</a><br><b>mmmm yummy food</b> <a class="info" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" class="preview"><span id="img-wrapper-4302565"><img data-info="4302565-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq4MyhSeFei" id="img4302565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11483802"></a><a class="title" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes">Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 11/21/17</a><br><b>Thanksgiving Feast!</b> <a class="info" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301903"><img data-info="4301903-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7Py5UeFei" id="img4301903" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482744"></a><a class="title" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>very into the story!</b> <a class="info" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301878"><img data-info="4301878-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7PilfeFei" id="img4301878" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482662"></a><a class="title" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>story time!</b> <a class="info" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" class="preview"><span id="img-wrapper-4295611"><img data-info="4295611-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO_MC9WeFei" id="img4295611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11463816"></a><a class="title" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Science, Social / Emotional for 11/20/17</a><br><b>outside fun</b> <a class="info" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4311975"><img data-info="4311975-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgu7PylSeFei" id="img4311975" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11514984"></a><a class="title" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/27/17</a><br><b>mmmm yummy food</b> <a class="info" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" class="preview"><span id="img-wrapper-4302565"><img data-info="4302565-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq4MyhSeFei" id="img4302565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11483802"></a><a class="title" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes">Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 11/21/17</a><br><b>Thanksgiving Feast!</b> <a class="info" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301903"><img data-info="4301903-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7Py5UeFei" id="img4301903" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482744"></a><a class="title" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>very into the story!</b> <a class="info" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301878"><img data-info="4301878-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7PilfeFei" id="img4301878" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482662"></a><a class="title" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>story time!</b> <a class="info" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" class="preview"><span id="img-wrapper-4295611"><img data-info="4295611-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO_MC9WeFei" id="img4295611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11463816"></a><a class="title" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Science, Social / Emotional for 11/20/17</a><br><b>outside fun</b> <a class="info" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4311975"><img data-info="4311975-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgu7PylSeFei" id="img4311975" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11514984"></a><a class="title" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/27/17</a><br><b>mmmm yummy food</b> <a class="info" href="/cubby_view.html?entryid=11514984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" class="preview"><span id="img-wrapper-4302565"><img data-info="4302565-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq4MyhSeFei" id="img4302565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11483802"></a><a class="title" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes">Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication, Social / Emotional for 11/21/17</a><br><b>Thanksgiving Feast!</b> <a class="info" href="/cubby_view.html?entryid=11483802&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301903"><img data-info="4301903-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7Py5UeFei" id="img4301903" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482744"></a><a class="title" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>very into the story!</b> <a class="info" href="/cubby_view.html?entryid=11482744&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" class="preview"><span id="img-wrapper-4301878"><img data-info="4301878-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbgq7PilfeFei" id="img4301878" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11482662"></a><a class="title" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 11/21/17</a><br><b>story time!</b> <a class="info" href="/cubby_view.html?entryid=11482662&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" class="preview"><span id="img-wrapper-4295611"><img data-info="4295611-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO_MC9WeFei" id="img4295611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11463816"></a><a class="title" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Science, Social / Emotional for 11/20/17</a><br><b>outside fun</b> <a class="info" href="/cubby_view.html?entryid=11463816&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11448934&amp;saveit=Yes" class="preview"><span id="img-wrapper-4293406"><img data-info="4293406-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwO5Mi5ReFei" id="img4293406" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11448934"></a><a class="title" href="/cubby_view.html?entryid=11448934&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor for 11/17/17</a><br><b>finishing our turkeys</b> <a class="info" href="/cubby_view.html?entryid=11448934&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11425836&amp;saveit=Yes" class="preview"><span id="img-wrapper-4283274"><img data-info="4283274-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwK5NClTeFei" id="img4283274" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11425836"></a><a class="title" href="/cubby_view.html?entryid=11425836&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition, Social / Emotional for 11/16/17</a><br><b>ready for lunch!</b> <a class="info" href="/cubby_view.html?entryid=11425836&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11408342&amp;saveit=Yes" class="preview"><span id="img-wrapper-4280011"><img data-info="4280011-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwK6Ni9WeFei" id="img4280011" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11408342"></a><a class="title" href="/cubby_view.html?entryid=11408342&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor, Social / Emotional, Sensory for 11/15/17</a><br><b>chalk art</b> <a class="info" href="/cubby_view.html?entryid=11408342&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11402258&amp;saveit=Yes" class="preview"><span id="img-wrapper-4274899"><img data-info="4274899-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw2-PideeFei" id="img4274899" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11402258"></a><a class="title" href="/cubby_view.html?entryid=11402258&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 11/15/17</a><br><b>gym time fun</b> <a class="info" href="/cubby_view.html?entryid=11402258&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11386976&amp;saveit=Yes" class="preview"><span id="img-wrapper-4272592"><img data-info="4272592-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw24MydVeFei" id="img4272592" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11386976"></a><a class="title" href="/cubby_view.html?entryid=11386976&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 11/14/17</a><br><b>Happy Birthday Josie!</b> <a class="info" href="/cubby_view.html?entryid=11386976&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11378254&amp;saveit=Yes" class="preview"><span id="img-wrapper-4267345"><img data-info="4267345-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwy9NSpSeFei" id="img4267345" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11378254"></a><a class="title" href="/cubby_view.html?entryid=11378254&amp;saveit=Yes">11/14/17</a><br><b>using big kid cups!!</b> <a class="info" href="/cubby_view.html?entryid=11378254&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11366398&amp;saveit=Yes" class="preview"><span id="img-wrapper-4266033"><img data-info="4266033-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwy8Ni1UeFei" id="img4266033" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11366398"></a><a class="title" href="/cubby_view.html?entryid=11366398&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Large Motor, Social / Emotional for 11/13/17</a><br><b>reading to myself</b> <a class="info" href="/cubby_view.html?entryid=11366398&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11366226&amp;saveit=Yes" class="preview"><span id="img-wrapper-4265867"><img data-info="4265867-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwy_PihQeFei" id="img4265867" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11366226"></a><a class="title" href="/cubby_view.html?entryid=11366226&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Sensory for 11/13/17</a><br><b>painting turkeys</b> <a class="info" href="/cubby_view.html?entryid=11366226&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11342402&amp;saveit=Yes" class="preview"><span id="img-wrapper-4255521"><img data-info="4255521-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw-_MyxWeFei" id="img4255521" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11342402"></a><a class="title" href="/cubby_view.html?entryid=11342402&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/10/17</a><br><b>racing in the gym this morning!</b> <a class="info" href="/cubby_view.html?entryid=11342402&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11340943&amp;saveit=Yes" class="preview"><span id="img-wrapper-4255070"><img data-info="4255070-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw-_NilXeFei" id="img4255070" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11340943"></a><a class="title" href="/cubby_view.html?entryid=11340943&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 11/10/17</a><br><b>dress up time!</b> <a class="info" href="/cubby_view.html?entryid=11340943&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11330606&amp;saveit=Yes" class="preview"><span id="img-wrapper-4253805"><img data-info="4253805-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw-5Pi5SeFei" id="img4253805" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11330606"></a><a class="title" href="/cubby_view.html?entryid=11330606&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Large Motor, Print Literacy Development for 11/09/17</a><br><b>reading books!</b> <a class="info" href="/cubby_view.html?entryid=11330606&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11310548&amp;saveit=Yes" class="preview"><span id="img-wrapper-4246889"><img data-info="4246889-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw68PiZeeFei" id="img4246889" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11310548"></a><a class="title" href="/cubby_view.html?entryid=11310548&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/08/17</a><br><b>playing outside this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11310548&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11283889&amp;saveit=Yes" class="preview"><span id="img-wrapper-4234046"><img data-info="4234046-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwm-NipReFei" id="img4234046" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11283889"></a><a class="title" href="/cubby_view.html?entryid=11283889&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/07/17</a><br><b>gym time this morning!</b> <a class="info" href="/cubby_view.html?entryid=11283889&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11268996&amp;saveit=Yes" class="preview"><span id="img-wrapper-4231563"><img data-info="4231563-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwm7MyhUeFei" id="img4231563" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11268996"></a><a class="title" href="/cubby_view.html?entryid=11268996&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/06/17</a><br><b>Happy Birthday Malcolm!!!! thanks for the treat!!!</b> <a class="info" href="/cubby_view.html?entryid=11268996&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11243583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4220154"><img data-info="4220154-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwi6NytTeFei" id="img4220154" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11243583"></a><a class="title" href="/cubby_view.html?entryid=11243583&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Science, Social / Emotional for 11/03/17</a><br><b>recess this morning!</b> <a class="info" href="/cubby_view.html?entryid=11243583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11330606&amp;saveit=Yes" class="preview"><span id="img-wrapper-4253805"><img data-info="4253805-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw-5Pi5SeFei" id="img4253805" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11330606"></a><a class="title" href="/cubby_view.html?entryid=11330606&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Large Motor, Print Literacy Development for 11/09/17</a><br><b>reading books!</b> <a class="info" href="/cubby_view.html?entryid=11330606&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11310548&amp;saveit=Yes" class="preview"><span id="img-wrapper-4246889"><img data-info="4246889-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw68PiZeeFei" id="img4246889" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11310548"></a><a class="title" href="/cubby_view.html?entryid=11310548&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/08/17</a><br><b>playing outside this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11310548&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11283889&amp;saveit=Yes" class="preview"><span id="img-wrapper-4234046"><img data-info="4234046-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwm-NipReFei" id="img4234046" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11283889"></a><a class="title" href="/cubby_view.html?entryid=11283889&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/07/17</a><br><b>gym time this morning!</b> <a class="info" href="/cubby_view.html?entryid=11283889&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11268996&amp;saveit=Yes" class="preview"><span id="img-wrapper-4231563"><img data-info="4231563-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwm7MyhUeFei" id="img4231563" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11268996"></a><a class="title" href="/cubby_view.html?entryid=11268996&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/06/17</a><br><b>Happy Birthday Malcolm!!!! thanks for the treat!!!</b> <a class="info" href="/cubby_view.html?entryid=11268996&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11243583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4220154"><img data-info="4220154-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwi6NytTeFei" id="img4220154" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11243583"></a><a class="title" href="/cubby_view.html?entryid=11243583&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Science, Social / Emotional for 11/03/17</a><br><b>recess this morning!</b> <a class="info" href="/cubby_view.html?entryid=11243583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11330606&amp;saveit=Yes" class="preview"><span id="img-wrapper-4253805"><img data-info="4253805-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw-5Pi5SeFei" id="img4253805" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11330606"></a><a class="title" href="/cubby_view.html?entryid=11330606&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Large Motor, Print Literacy Development for 11/09/17</a><br><b>reading books!</b> <a class="info" href="/cubby_view.html?entryid=11330606&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11310548&amp;saveit=Yes" class="preview"><span id="img-wrapper-4246889"><img data-info="4246889-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbw68PiZeeFei" id="img4246889" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11310548"></a><a class="title" href="/cubby_view.html?entryid=11310548&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/08/17</a><br><b>playing outside this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=11310548&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11283889&amp;saveit=Yes" class="preview"><span id="img-wrapper-4234046"><img data-info="4234046-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwm-NipReFei" id="img4234046" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11283889"></a><a class="title" href="/cubby_view.html?entryid=11283889&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 11/07/17</a><br><b>gym time this morning!</b> <a class="info" href="/cubby_view.html?entryid=11283889&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11268996&amp;saveit=Yes" class="preview"><span id="img-wrapper-4231563"><img data-info="4231563-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwm7MyhUeFei" id="img4231563" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11268996"></a><a class="title" href="/cubby_view.html?entryid=11268996&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 11/06/17</a><br><b>Happy Birthday Malcolm!!!! thanks for the treat!!!</b> <a class="info" href="/cubby_view.html?entryid=11268996&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11243583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4220154"><img data-info="4220154-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwi6NytTeFei" id="img4220154" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11243583"></a><a class="title" href="/cubby_view.html?entryid=11243583&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Science, Social / Emotional for 11/03/17</a><br><b>recess this morning!</b> <a class="info" href="/cubby_view.html?entryid=11243583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11223481&amp;saveit=Yes" class="preview"><span id="img-wrapper-4213102"><img data-info="4213102-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwu5Ny5VeFei" id="img4213102" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11223481"></a><a class="title" href="/cubby_view.html?entryid=11223481&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 11/02/17</a><br><b>oh Mr Drew you so funny!</b> <a class="info" href="/cubby_view.html?entryid=11223481&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11223372&amp;saveit=Yes" class="preview"><span id="img-wrapper-4213058"><img data-info="4213058-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwu5NitfeFei" id="img4213058" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11223372"></a><a class="title" href="/cubby_view.html?entryid=11223372&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 11/02/17</a><br><b>who you gonna call!</b> <a class="info" href="/cubby_view.html?entryid=11223372&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11223318&amp;saveit=Yes" class="preview"><span id="img-wrapper-4213041"><img data-info="4213041-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwu5NipWeFei" id="img4213041" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11223318"></a><a class="title" href="/cubby_view.html?entryid=11223318&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 11/02/17</a><br><b>playing with our newest member to lionheart Ms Molly!</b> <a class="info" href="/cubby_view.html?entryid=11223318&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11223013&amp;saveit=Yes" class="preview"><span id="img-wrapper-4212978"><img data-info="4212978-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwu4PylfeFei" id="img4212978" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11223013"></a><a class="title" href="/cubby_view.html?entryid=11223013&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 11/02/17</a><br><b>dressing up!</b> <a class="info" href="/cubby_view.html?entryid=11223013&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11203359&amp;saveit=Yes" class="preview"><span id="img-wrapper-4206245"><img data-info="4206245-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq8NCpSeFei" id="img4206245" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11203359"></a><a class="title" href="/cubby_view.html?entryid=11203359&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/17</a><br><b>happy Wednesday!</b> <a class="info" href="/cubby_view.html?entryid=11203359&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" class="preview"><span id="img-wrapper-4206087"><img data-info="4206087-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq8NiZQeFei" id="img4206087" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11202407"></a><a class="title" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/17</a><br><b>being silly!</b> <a class="info" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203533"><img data-info="4203533-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5My1UeFei" id="img4203533" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11189081"></a><a class="title" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 10/31/17</a><br><b>party time!</b> <a class="info" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203431"><img data-info="4203431-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi1WeFei" id="img4203431" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188998"></a><a class="title" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 10/31/17</a><br><b>monkeys Halloween!</b> <a class="info" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203402"><img data-info="4203402-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi5VeFei" id="img4203402" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188984"></a><a class="title" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/31/17</a><br><b>Halloween parties are our favorite!!!</b> <a class="info" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" class="preview"><span id="img-wrapper-4196840"><img data-info="4196840-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO8PipXeFei" id="img4196840" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11170025"></a><a class="title" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/30/17</a><br><b>afternoon books!</b> <a class="info" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" class="preview"><span id="img-wrapper-4206087"><img data-info="4206087-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq8NiZQeFei" id="img4206087" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11202407"></a><a class="title" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/17</a><br><b>being silly!</b> <a class="info" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203533"><img data-info="4203533-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5My1UeFei" id="img4203533" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11189081"></a><a class="title" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 10/31/17</a><br><b>party time!</b> <a class="info" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203431"><img data-info="4203431-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi1WeFei" id="img4203431" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188998"></a><a class="title" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 10/31/17</a><br><b>monkeys Halloween!</b> <a class="info" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203402"><img data-info="4203402-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi5VeFei" id="img4203402" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188984"></a><a class="title" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/31/17</a><br><b>Halloween parties are our favorite!!!</b> <a class="info" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" class="preview"><span id="img-wrapper-4196840"><img data-info="4196840-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO8PipXeFei" id="img4196840" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11170025"></a><a class="title" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/30/17</a><br><b>afternoon books!</b> <a class="info" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" class="preview"><span id="img-wrapper-4206087"><img data-info="4206087-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq8NiZQeFei" id="img4206087" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11202407"></a><a class="title" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/17</a><br><b>being silly!</b> <a class="info" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203533"><img data-info="4203533-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5My1UeFei" id="img4203533" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11189081"></a><a class="title" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 10/31/17</a><br><b>party time!</b> <a class="info" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203431"><img data-info="4203431-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi1WeFei" id="img4203431" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188998"></a><a class="title" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 10/31/17</a><br><b>monkeys Halloween!</b> <a class="info" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203402"><img data-info="4203402-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi5VeFei" id="img4203402" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188984"></a><a class="title" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/31/17</a><br><b>Halloween parties are our favorite!!!</b> <a class="info" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" class="preview"><span id="img-wrapper-4196840"><img data-info="4196840-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO8PipXeFei" id="img4196840" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11170025"></a><a class="title" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/30/17</a><br><b>afternoon books!</b> <a class="info" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" class="preview"><span id="img-wrapper-4206087"><img data-info="4206087-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq8NiZQeFei" id="img4206087" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11202407"></a><a class="title" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/17</a><br><b>being silly!</b> <a class="info" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203533"><img data-info="4203533-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5My1UeFei" id="img4203533" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11189081"></a><a class="title" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 10/31/17</a><br><b>party time!</b> <a class="info" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203431"><img data-info="4203431-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi1WeFei" id="img4203431" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188998"></a><a class="title" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 10/31/17</a><br><b>monkeys Halloween!</b> <a class="info" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203402"><img data-info="4203402-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi5VeFei" id="img4203402" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188984"></a><a class="title" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/31/17</a><br><b>Halloween parties are our favorite!!!</b> <a class="info" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" class="preview"><span id="img-wrapper-4196840"><img data-info="4196840-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO8PipXeFei" id="img4196840" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11170025"></a><a class="title" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/30/17</a><br><b>afternoon books!</b> <a class="info" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" class="preview"><span id="img-wrapper-4206087"><img data-info="4206087-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq8NiZQeFei" id="img4206087" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11202407"></a><a class="title" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/17</a><br><b>being silly!</b> <a class="info" href="/cubby_view.html?entryid=11202407&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203533"><img data-info="4203533-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5My1UeFei" id="img4203533" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11189081"></a><a class="title" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 10/31/17</a><br><b>party time!</b> <a class="info" href="/cubby_view.html?entryid=11189081&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203431"><img data-info="4203431-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi1WeFei" id="img4203431" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188998"></a><a class="title" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Social / Emotional for 10/31/17</a><br><b>monkeys Halloween!</b> <a class="info" href="/cubby_view.html?entryid=11188998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" class="preview"><span id="img-wrapper-4203402"><img data-info="4203402-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbwq5Mi5VeFei" id="img4203402" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11188984"></a><a class="title" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/31/17</a><br><b>Halloween parties are our favorite!!!</b> <a class="info" href="/cubby_view.html?entryid=11188984&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" class="preview"><span id="img-wrapper-4196840"><img data-info="4196840-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO8PipXeFei" id="img4196840" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11170025"></a><a class="title" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/30/17</a><br><b>afternoon books!</b> <a class="info" href="/cubby_view.html?entryid=11170025&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11165544&amp;saveit=Yes" class="preview"><span id="img-wrapper-4192127"><img data-info="4192127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO4NyxQeFei" id="img4192127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11165544"></a><a class="title" href="/cubby_view.html?entryid=11165544&amp;saveit=Yes">10/30/17</a><br><b>incident report</b> <a class="info" href="/cubby_view.html?entryid=11165544&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11163939&amp;saveit=Yes" class="preview"><span id="img-wrapper-4191306"><img data-info="4191306-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAO7NS5ReFei" id="img4191306" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11163939"></a><a class="title" href="/cubby_view.html?entryid=11163939&amp;saveit=Yes">Art, Fine Motor, Large Motor, Social / Emotional for 10/30/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=11163939&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11142308&amp;saveit=Yes" class="preview"><span id="img-wrapper-4183105"><img data-info="4183105-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAK5Ny5SeFei" id="img4183105" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11142308"></a><a class="title" href="/cubby_view.html?entryid=11142308&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Science, Social / Emotional for 10/27/17</a><br><b>gym time on this cold morning!</b> <a class="info" href="/cubby_view.html?entryid=11142308&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11141822&amp;saveit=Yes" class="preview"><span id="img-wrapper-4183029"><img data-info="4183029-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAK5NixeeFei" id="img4183029" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11141822"></a><a class="title" href="/cubby_view.html?entryid=11141822&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Large Motor, Social / Emotional for 10/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=11141822&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11130708&amp;saveit=Yes" class="preview"><span id="img-wrapper-4182313"><img data-info="4182313-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAK4NS9UeFei" id="img4182313" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11130708"></a><a class="title" href="/cubby_view.html?entryid=11130708&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/26/17</a><br><b>good listeners!!</b> <a class="info" href="/cubby_view.html?entryid=11130708&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11126213&amp;saveit=Yes" class="preview"><span id="img-wrapper-4177523"><img data-info="4177523-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA29MyxUeFei" id="img4177523" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11126213"></a><a class="title" href="/cubby_view.html?entryid=11126213&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Music, Print Literacy Development for 10/26/17</a><br><b>circle time!!</b> <a class="info" href="/cubby_view.html?entryid=11126213&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11122922&amp;saveit=Yes" class="preview"><span id="img-wrapper-4176148"><img data-info="4176148-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA28NypfeFei" id="img4176148" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11122922"></a><a class="title" href="/cubby_view.html?entryid=11122922&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional, Sensory for 10/26/17</a><br><b>recess this morning!</b> <a class="info" href="/cubby_view.html?entryid=11122922&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11107522&amp;saveit=Yes" class="preview"><span id="img-wrapper-4171646"><img data-info="4171646-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA27MCpReFei" id="img4171646" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11107522"></a><a class="title" href="/cubby_view.html?entryid=11107522&amp;saveit=Yes">Approaches to Learning / Cognitive, Sensory for 10/25/17</a><br><b>pumpkin goo!</b> <a class="info" href="/cubby_view.html?entryid=11107522&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11102261&amp;saveit=Yes" class="preview"><span id="img-wrapper-4168250"><img data-info="4168250-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAyyNCtXeFei" id="img4168250" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11102261"></a><a class="title" href="/cubby_view.html?entryid=11102261&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 10/25/17</a><br><b>rawr! I'm a dinosaur</b> <a class="info" href="/cubby_view.html?entryid=11102261&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11089089&amp;saveit=Yes" class="preview"><span id="img-wrapper-4166643"><img data-info="4166643-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAy8MCpUeFei" id="img4166643" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11089089"></a><a class="title" href="/cubby_view.html?entryid=11089089&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 10/24/17</a><br><b>we love recess!</b> <a class="info" href="/cubby_view.html?entryid=11089089&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11088943&amp;saveit=Yes" class="preview"><span id="img-wrapper-4166518"><img data-info="4166518-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAy8My9feFei" id="img4166518" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11088943"></a><a class="title" href="/cubby_view.html?entryid=11088943&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 10/24/17</a><br><b>book time!</b> <a class="info" href="/cubby_view.html?entryid=11088943&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11082691&amp;saveit=Yes" class="preview"><span id="img-wrapper-4160915"><img data-info="4160915-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAy6Py9SeFei" id="img4160915" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11082691"></a><a class="title" href="/cubby_view.html?entryid=11082691&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 10/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=11082691&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11064417&amp;saveit=Yes" class="preview"><span id="img-wrapper-4154151"><img data-info="4154151-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA--NytWeFei" id="img4154151" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11064417"></a><a class="title" href="/cubby_view.html?entryid=11064417&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 10/23/17</a><br><b>block fun</b> <a class="info" href="/cubby_view.html?entryid=11064417&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11045503&amp;saveit=Yes" class="preview"><span id="img-wrapper-4147204"><img data-info="4147204-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA69NC5TeFei" id="img4147204" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11045503"></a><a class="title" href="/cubby_view.html?entryid=11045503&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Music, Social / Emotional for 10/20/17</a><br><b>dance party!</b> <a class="info" href="/cubby_view.html?entryid=11045503&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11042796&amp;saveit=Yes" class="preview"><span id="img-wrapper-4146012"><img data-info="4146012-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA68Ni9VeFei" id="img4146012" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11042796"></a><a class="title" href="/cubby_view.html?entryid=11042796&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 10/20/17</a><br><b>recess time this morning!</b> <a class="info" href="/cubby_view.html?entryid=11042796&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11042025&amp;saveit=Yes" class="preview"><span id="img-wrapper-4145869"><img data-info="4145869-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbA6_PiheeFei" id="img4145869" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11042025"></a><a class="title" href="/cubby_view.html?entryid=11042025&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 10/20/17</a><br><b>playing with balls this morning!</b> <a class="info" href="/cubby_view.html?entryid=11042025&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11026195&amp;saveit=Yes" class="preview"><span id="img-wrapper-4139182"><img data-info="4139182-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAmzNyZVeFei" id="img4139182" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11026195"></a><a class="title" href="/cubby_view.html?entryid=11026195&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor for 10/19/17</a><br><b>circle time.</b> <a class="info" href="/cubby_view.html?entryid=11026195&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11024297&amp;saveit=Yes" class="preview"><span id="img-wrapper-4138315"><img data-info="4138315-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAmyNS9SeFei" id="img4138315" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11024297"></a><a class="title" href="/cubby_view.html?entryid=11024297&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 10/19/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=11024297&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11005640&amp;saveit=Yes" class="preview"><span id="img-wrapper-4131027"><img data-info="4131027-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAm7NixQeFei" id="img4131027" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11005640"></a><a class="title" href="/cubby_view.html?entryid=11005640&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/18/17</a><br><b>puzzle fun</b> <a class="info" href="/cubby_view.html?entryid=11005640&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=11005065&amp;saveit=Yes" class="preview"><span id="img-wrapper-4130709"><img data-info="4130709-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAm6MS5eeFei" id="img4130709" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="11005065"></a><a class="title" href="/cubby_view.html?entryid=11005065&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 10/18/17</a><br><b>cottage fun</b> <a class="info" href="/cubby_view.html?entryid=11005065&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10969959&amp;saveit=Yes" class="preview"><span id="img-wrapper-4120784"><img data-info="4120784-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAi6MSZTeFei" id="img4120784" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10969959"></a><a class="title" href="/cubby_view.html?entryid=10969959&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 10/16/17</a><br><b>enjoying the weather this afternoon!</b> <a class="info" href="/cubby_view.html?entryid=10969959&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10963722&amp;saveit=Yes" class="preview"><span id="img-wrapper-4115554"><img data-info="4115554-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAu_MytTeFei" id="img4115554" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10963722"></a><a class="title" href="/cubby_view.html?entryid=10963722&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 10/16/17</a><br><b>it's a car!</b> <a class="info" href="/cubby_view.html?entryid=10963722&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10943479&amp;saveit=Yes" class="preview"><span id="img-wrapper-4107557"><img data-info="4107557-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAq9MytQeFei" id="img4107557" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10943479"></a><a class="title" href="/cubby_view.html?entryid=10943479&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Music, Social / Emotional for 10/13/17</a><br><b>Making music using the table!</b> <a class="info" href="/cubby_view.html?entryid=10943479&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10943415&amp;saveit=Yes" class="preview"><span id="img-wrapper-4107544"><img data-info="4107544-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbAq9MypTeFei" id="img4107544" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10943415"></a><a class="title" href="/cubby_view.html?entryid=10943415&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 10/13/17</a><br><b>Sitting outside chatting together!</b> <a class="info" href="/cubby_view.html?entryid=10943415&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10923716&amp;saveit=Yes" class="preview"><span id="img-wrapper-4099842"><img data-info="4099842-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQOzPipVeFei" id="img4099842" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10923716"></a><a class="title" href="/cubby_view.html?entryid=10923716&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication for 10/12/17</a><br><b>Telling us what he sees in the picture!</b> <a class="info" href="/cubby_view.html?entryid=10923716&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10884384&amp;saveit=Yes" class="preview"><span id="img-wrapper-4084511"><img data-info="4084511-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQK-My9WeFei" id="img4084511" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10884384"></a><a class="title" href="/cubby_view.html?entryid=10884384&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor, Social / Emotional for 10/10/17</a><br><b>getting ready to grill!</b> <a class="info" href="/cubby_view.html?entryid=10884384&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10867310&amp;saveit=Yes" class="preview"><span id="img-wrapper-4080610"><img data-info="4080610-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQK6MC9XeFei" id="img4080610" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10867310"></a><a class="title" href="/cubby_view.html?entryid=10867310&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 10/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10867310&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10852536&amp;saveit=Yes" class="preview"><span id="img-wrapper-4073926"><img data-info="4073926-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ25PyxReFei" id="img4073926" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10852536"></a><a class="title" href="/cubby_view.html?entryid=10852536&amp;saveit=Yes">10/06/17</a><br><b>"racing"</b> <a class="info" href="/cubby_view.html?entryid=10852536&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10852414&amp;saveit=Yes" class="preview"><span id="img-wrapper-4073889"><img data-info="4073889-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ25PiZeeFei" id="img4073889" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10852414"></a><a class="title" href="/cubby_view.html?entryid=10852414&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Health / Safety / Nutrition, Large Motor, Social / Emotional for 10/06/17</a><br><b>playing in the gym with the elephants!</b> <a class="info" href="/cubby_view.html?entryid=10852414&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10837756&amp;saveit=Yes" class="preview"><span id="img-wrapper-4069456"><img data-info="4069456-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQyzMitReFei" id="img4069456" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10837756"></a><a class="title" href="/cubby_view.html?entryid=10837756&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor, Print Literacy Development for 10/05/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10837756&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10835050&amp;saveit=Yes" class="preview"><span id="img-wrapper-4066897"><img data-info="4066897-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQy8PidQeFei" id="img4066897" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10835050"></a><a class="title" href="/cubby_view.html?entryid=10835050&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Language / Vocal Communication for 10/05/17</a><br><b>Making phone calls!</b> <a class="info" href="/cubby_view.html?entryid=10835050&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10834920&amp;saveit=Yes" class="preview"><span id="img-wrapper-4066822"><img data-info="4066822-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQy8PixVeFei" id="img4066822" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10834920"></a><a class="title" href="/cubby_view.html?entryid=10834920&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition for 10/05/17</a><br><b>Sebastian pretending to wash his hands!</b> <a class="info" href="/cubby_view.html?entryid=10834920&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10834673&amp;saveit=Yes" class="preview"><span id="img-wrapper-4066723"><img data-info="4066723-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQy8MSxUeFei" id="img4066723" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10834673"></a><a class="title" href="/cubby_view.html?entryid=10834673&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Science for 10/05/17</a><br><b>Spinning the gears!</b> <a class="info" href="/cubby_view.html?entryid=10834673&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10834530&amp;saveit=Yes" class="preview"><span id="img-wrapper-4066677"><img data-info="4066677-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQy8MClQeFei" id="img4066677" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10834530"></a><a class="title" href="/cubby_view.html?entryid=10834530&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Science for 10/05/17</a><br><b>Telescope exploration!</b> <a class="info" href="/cubby_view.html?entryid=10834530&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10833786&amp;saveit=Yes" class="preview"><span id="img-wrapper-4066352"><img data-info="4066352-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQy8NStVeFei" id="img4066352" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10833786"></a><a class="title" href="/cubby_view.html?entryid=10833786&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 10/05/17</a><br><b>Running around being silly!</b> <a class="info" href="/cubby_view.html?entryid=10833786&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10833521&amp;saveit=Yes" class="preview"><span id="img-wrapper-4066259"><img data-info="4066259-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQy8NCteeFei" id="img4066259" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10833521"></a><a class="title" href="/cubby_view.html?entryid=10833521&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 10/05/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10833521&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10815003&amp;saveit=Yes" class="preview"><span id="img-wrapper-4059629"><img data-info="4059629-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-zMCxeeFei" id="img4059629" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10815003"></a><a class="title" href="/cubby_view.html?entryid=10815003&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Fine Motor, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 10/04/17</a><br><b>Stories with Ms. Taylor!</b> <a class="info" href="/cubby_view.html?entryid=10815003&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10814701&amp;saveit=Yes" class="preview"><span id="img-wrapper-4059515"><img data-info="4059515-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-zMy9SeFei" id="img4059515" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10814701"></a><a class="title" href="/cubby_view.html?entryid=10814701&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Health / Safety / Nutrition for 10/04/17</a><br><b>art!</b> <a class="info" href="/cubby_view.html?entryid=10814701&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10814251&amp;saveit=Yes" class="preview"><span id="img-wrapper-4059257"><img data-info="4059257-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-zNCtQeFei" id="img4059257" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10814251"></a><a class="title" href="/cubby_view.html?entryid=10814251&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/04/17</a><br><b>carrying a ball around during gym time!</b> <a class="info" href="/cubby_view.html?entryid=10814251&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10794227&amp;saveit=Yes" class="preview"><span id="img-wrapper-4051438"><img data-info="4051438-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-7Mi1feFei" id="img4051438" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10794227"></a><a class="title" href="/cubby_view.html?entryid=10794227&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 10/03/17</a><br><b>Storytime!</b> <a class="info" href="/cubby_view.html?entryid=10794227&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10793296&amp;saveit=Yes" class="preview"><span id="img-wrapper-4051051"><img data-info="4051051-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-7NitWeFei" id="img4051051" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10793296"></a><a class="title" href="/cubby_view.html?entryid=10793296&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Large Motor, Music for 10/03/17</a><br><b>5 in the bed in the little one said ROLL OVER!</b> <a class="info" href="/cubby_view.html?entryid=10793296&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10792858&amp;saveit=Yes" class="preview"><span id="img-wrapper-4050901"><img data-info="4050901-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-6Py5WeFei" id="img4050901" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10792858"></a><a class="title" href="/cubby_view.html?entryid=10792858&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor for 10/03/17</a><br><b>tractor!</b> <a class="info" href="/cubby_view.html?entryid=10792858&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10792570&amp;saveit=Yes" class="preview"><span id="img-wrapper-4050839"><img data-info="4050839-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-6Pi1eeFei" id="img4050839" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10792570"></a><a class="title" href="/cubby_view.html?entryid=10792570&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Science for 10/03/17</a><br><b>dump truck fun!</b> <a class="info" href="/cubby_view.html?entryid=10792570&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10792473&amp;saveit=Yes" class="preview"><span id="img-wrapper-4050817"><img data-info="4050817-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ-6Pi9QeFei" id="img4050817" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10792473"></a><a class="title" href="/cubby_view.html?entryid=10792473&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 10/03/17</a><br><b>bike fun!</b> <a class="info" href="/cubby_view.html?entryid=10792473&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10774954&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044806"><img data-info="4044806-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-Pi5ReFei" id="img4044806" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10774954"></a><a class="title" href="/cubby_view.html?entryid=10774954&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Social Studies for 10/02/17</a><br><b>making his house!</b> <a class="info" href="/cubby_view.html?entryid=10774954&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10773147&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044143"><img data-info="4044143-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NypUeFei" id="img4044143" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10773147"></a><a class="title" href="/cubby_view.html?entryid=10773147&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 10/02/17</a><br><b>investigating a dump truck!</b> <a class="info" href="/cubby_view.html?entryid=10773147&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10772788&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044053"><img data-info="4044053-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NitUeFei" id="img4044053" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10772788"></a><a class="title" href="/cubby_view.html?entryid=10772788&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Social / Emotional for 10/02/17</a><br><b>Chalk fun!</b> <a class="info" href="/cubby_view.html?entryid=10772788&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10772660&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044025"><img data-info="4044025-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NixSeFei" id="img4044025" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10772660"></a><a class="title" href="/cubby_view.html?entryid=10772660&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 10/02/17</a><br><b>Talking about the ball with each other!</b> <a class="info" href="/cubby_view.html?entryid=10772660&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10758693&amp;saveit=Yes" class="preview"><span id="img-wrapper-4041414"><img data-info="4041414-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ67Mi9TeFei" id="img4041414" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10758693"></a><a class="title" href="/cubby_view.html?entryid=10758693&amp;saveit=Yes">09/29/17</a><br><b>Celebrating Savannahs birthday!!</b> <a class="info" href="/cubby_view.html?entryid=10758693&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10755571&amp;saveit=Yes" class="preview"><span id="img-wrapper-4037630"><img data-info="4037630-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQm9MC1XeFei" id="img4037630" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10755571"></a><a class="title" href="/cubby_view.html?entryid=10755571&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Print Literacy Development for 09/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10755571&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10773147&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044143"><img data-info="4044143-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NypUeFei" id="img4044143" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10773147"></a><a class="title" href="/cubby_view.html?entryid=10773147&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 10/02/17</a><br><b>investigating a dump truck!</b> <a class="info" href="/cubby_view.html?entryid=10773147&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10772788&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044053"><img data-info="4044053-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NitUeFei" id="img4044053" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10772788"></a><a class="title" href="/cubby_view.html?entryid=10772788&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Social / Emotional for 10/02/17</a><br><b>Chalk fun!</b> <a class="info" href="/cubby_view.html?entryid=10772788&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10772660&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044025"><img data-info="4044025-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NixSeFei" id="img4044025" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10772660"></a><a class="title" href="/cubby_view.html?entryid=10772660&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 10/02/17</a><br><b>Talking about the ball with each other!</b> <a class="info" href="/cubby_view.html?entryid=10772660&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10758693&amp;saveit=Yes" class="preview"><span id="img-wrapper-4041414"><img data-info="4041414-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ67Mi9TeFei" id="img4041414" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10758693"></a><a class="title" href="/cubby_view.html?entryid=10758693&amp;saveit=Yes">09/29/17</a><br><b>Celebrating Savannahs birthday!!</b> <a class="info" href="/cubby_view.html?entryid=10758693&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10755571&amp;saveit=Yes" class="preview"><span id="img-wrapper-4037630"><img data-info="4037630-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQm9MC1XeFei" id="img4037630" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10755571"></a><a class="title" href="/cubby_view.html?entryid=10755571&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Print Literacy Development for 09/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10755571&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10773147&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044143"><img data-info="4044143-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NypUeFei" id="img4044143" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10773147"></a><a class="title" href="/cubby_view.html?entryid=10773147&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 10/02/17</a><br><b>investigating a dump truck!</b> <a class="info" href="/cubby_view.html?entryid=10773147&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10772788&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044053"><img data-info="4044053-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NitUeFei" id="img4044053" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10772788"></a><a class="title" href="/cubby_view.html?entryid=10772788&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Social / Emotional for 10/02/17</a><br><b>Chalk fun!</b> <a class="info" href="/cubby_view.html?entryid=10772788&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10772660&amp;saveit=Yes" class="preview"><span id="img-wrapper-4044025"><img data-info="4044025-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ6-NixSeFei" id="img4044025" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10772660"></a><a class="title" href="/cubby_view.html?entryid=10772660&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Social / Emotional for 10/02/17</a><br><b>Talking about the ball with each other!</b> <a class="info" href="/cubby_view.html?entryid=10772660&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10758693&amp;saveit=Yes" class="preview"><span id="img-wrapper-4041414"><img data-info="4041414-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQ67Mi9TeFei" id="img4041414" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10758693"></a><a class="title" href="/cubby_view.html?entryid=10758693&amp;saveit=Yes">09/29/17</a><br><b>Celebrating Savannahs birthday!!</b> <a class="info" href="/cubby_view.html?entryid=10758693&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10755571&amp;saveit=Yes" class="preview"><span id="img-wrapper-4037630"><img data-info="4037630-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQm9MC1XeFei" id="img4037630" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10755571"></a><a class="title" href="/cubby_view.html?entryid=10755571&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Print Literacy Development for 09/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10755571&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10755493&amp;saveit=Yes" class="preview"><span id="img-wrapper-4037570"><img data-info="4037570-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQm9MylXeFei" id="img4037570" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10755493"></a><a class="title" href="/cubby_view.html?entryid=10755493&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Print Literacy Development for 09/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10755493&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Monkeys , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10752417&amp;saveit=Yes" class="preview"><span id="img-wrapper-4036324"><img data-info="4036324-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQm8NSxTeFei" id="img4036324" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10752417"></a><a class="title" href="/cubby_view.html?entryid=10752417&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10752417&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10734129&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029326"><img data-info="4029326-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNSxReFei" id="img4029326" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10734129"></a><a class="title" href="/cubby_view.html?entryid=10734129&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Music, Social / Emotional for 09/28/17</a><br><b>Singing songs outside!</b> <a class="info" href="/cubby_view.html?entryid=10734129&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10733646&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029184"><img data-info="4029184-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNyZTeFei" id="img4029184" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10733646"></a><a class="title" href="/cubby_view.html?entryid=10733646&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Science, Social / Emotional for 09/28/17</a><br><b>Looking through the telescope!</b> <a class="info" href="/cubby_view.html?entryid=10733646&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10733448&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029131"><img data-info="4029131-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNy1WeFei" id="img4029131" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10733448"></a><a class="title" href="/cubby_view.html?entryid=10733448&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 09/28/17</a><br><b>Getting Ms. Kenzie</b> <a class="info" href="/cubby_view.html?entryid=10733448&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029127"><img data-info="4029127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNyxQeFei" id="img4029127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10733399"></a><a class="title" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 09/28/17</a><br><b>recess fun!</b> <a class="info" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" class="preview"><span id="img-wrapper-4027067"><img data-info="4027067-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi9NihQeFei" id="img4027067" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10719502"></a><a class="title" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/27/17</a><br><b>On the move!</b> <a class="info" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" class="preview"><span id="img-wrapper-4022676"><img data-info="4022676-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi4MClReFei" id="img4022676" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10715261"></a><a class="title" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication for 09/27/17</a><br><b>Making food together!</b> <a class="info" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" class="preview"><span id="img-wrapper-4015515"><img data-info="4015515-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu_My9SeFei" id="img4015515" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10695545"></a><a class="title" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 09/26/17</a><br><b>art!</b> <a class="info" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4014343"><img data-info="4014343-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu-NSpUeFei" id="img4014343" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10692583"></a><a class="title" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/26/17</a><br><b>Scooting along!</b> <a class="info" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029127"><img data-info="4029127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNyxQeFei" id="img4029127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10733399"></a><a class="title" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 09/28/17</a><br><b>recess fun!</b> <a class="info" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" class="preview"><span id="img-wrapper-4027067"><img data-info="4027067-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi9NihQeFei" id="img4027067" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10719502"></a><a class="title" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/27/17</a><br><b>On the move!</b> <a class="info" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" class="preview"><span id="img-wrapper-4022676"><img data-info="4022676-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi4MClReFei" id="img4022676" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10715261"></a><a class="title" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication for 09/27/17</a><br><b>Making food together!</b> <a class="info" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" class="preview"><span id="img-wrapper-4015515"><img data-info="4015515-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu_My9SeFei" id="img4015515" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10695545"></a><a class="title" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 09/26/17</a><br><b>art!</b> <a class="info" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4014343"><img data-info="4014343-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu-NSpUeFei" id="img4014343" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10692583"></a><a class="title" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/26/17</a><br><b>Scooting along!</b> <a class="info" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029127"><img data-info="4029127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNyxQeFei" id="img4029127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10733399"></a><a class="title" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 09/28/17</a><br><b>recess fun!</b> <a class="info" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" class="preview"><span id="img-wrapper-4027067"><img data-info="4027067-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi9NihQeFei" id="img4027067" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10719502"></a><a class="title" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/27/17</a><br><b>On the move!</b> <a class="info" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" class="preview"><span id="img-wrapper-4022676"><img data-info="4022676-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi4MClReFei" id="img4022676" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10715261"></a><a class="title" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication for 09/27/17</a><br><b>Making food together!</b> <a class="info" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" class="preview"><span id="img-wrapper-4015515"><img data-info="4015515-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu_My9SeFei" id="img4015515" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10695545"></a><a class="title" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 09/26/17</a><br><b>art!</b> <a class="info" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4014343"><img data-info="4014343-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu-NSpUeFei" id="img4014343" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10692583"></a><a class="title" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/26/17</a><br><b>Scooting along!</b> <a class="info" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" class="preview"><span id="img-wrapper-4029127"><img data-info="4029127-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQizNyxQeFei" id="img4029127" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10733399"></a><a class="title" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 09/28/17</a><br><b>recess fun!</b> <a class="info" href="/cubby_view.html?entryid=10733399&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" class="preview"><span id="img-wrapper-4027067"><img data-info="4027067-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi9NihQeFei" id="img4027067" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10719502"></a><a class="title" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/27/17</a><br><b>On the move!</b> <a class="info" href="/cubby_view.html?entryid=10719502&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" class="preview"><span id="img-wrapper-4022676"><img data-info="4022676-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQi4MClReFei" id="img4022676" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10715261"></a><a class="title" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Health / Safety / Nutrition, Language / Vocal Communication for 09/27/17</a><br><b>Making food together!</b> <a class="info" href="/cubby_view.html?entryid=10715261&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" class="preview"><span id="img-wrapper-4015515"><img data-info="4015515-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu_My9SeFei" id="img4015515" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10695545"></a><a class="title" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 09/26/17</a><br><b>art!</b> <a class="info" href="/cubby_view.html?entryid=10695545&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" class="preview"><span id="img-wrapper-4014343"><img data-info="4014343-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQu-NSpUeFei" id="img4014343" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10692583"></a><a class="title" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 09/26/17</a><br><b>Scooting along!</b> <a class="info" href="/cubby_view.html?entryid=10692583&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10674179&amp;saveit=Yes" class="preview"><span id="img-wrapper-4007538"><img data-info="4007538-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQq9My1feFei" id="img4007538" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10674179"></a><a class="title" href="/cubby_view.html?entryid=10674179&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Social / Emotional for 09/25/17</a><br><b>Drawing our friends!</b> <a class="info" href="/cubby_view.html?entryid=10674179&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10672955&amp;saveit=Yes" class="preview"><span id="img-wrapper-4007181"><img data-info="4007181-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQq9NyZWeFei" id="img4007181" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10672955"></a><a class="title" href="/cubby_view.html?entryid=10672955&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Science for 09/25/17</a><br><b>funnel investigation!</b> <a class="info" href="/cubby_view.html?entryid=10672955&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10672582&amp;saveit=Yes" class="preview"><span id="img-wrapper-4007103"><img data-info="4007103-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQq9Ny5UeFei" id="img4007103" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10672582"></a><a class="title" href="/cubby_view.html?entryid=10672582&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Social / Emotional for 09/25/17</a><br><b>bike fun!</b> <a class="info" href="/cubby_view.html?entryid=10672582&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10656134&amp;saveit=Yes" class="preview"><span id="img-wrapper-4001277"><img data-info="4001277-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQq7NClQeFei" id="img4001277" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10656134"></a><a class="title" href="/cubby_view.html?entryid=10656134&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Print Literacy Development for 09/22/17</a><br><b>prewriting!</b> <a class="info" href="/cubby_view.html?entryid=10656134&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10654351&amp;saveit=Yes" class="preview"><span id="img-wrapper-4000114"><img data-info="4000114-90-0" src="https://www.lifecubby.me/i/rmrmJYwDbQq6Ny9TeFei" id="img4000114" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10654351"></a><a class="title" href="/cubby_view.html?entryid=10654351&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/22/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10654351&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10637828&amp;saveit=Yes" class="preview"><span id="img-wrapper-3994284"><img data-info="3994284-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAO-NCZTeFei" id="img3994284" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10637828"></a><a class="title" href="/cubby_view.html?entryid=10637828&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Large Motor, Music, Social / Emotional for 09/21/17</a><br><b>Singing and dancing to Ms. Caitlin singing!</b> <a class="info" href="/cubby_view.html?entryid=10637828&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10636123&amp;saveit=Yes" class="preview"><span id="img-wrapper-3993247"><img data-info="3993247-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAO5NCpQeFei" id="img3993247" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10636123"></a><a class="title" href="/cubby_view.html?entryid=10636123&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 09/21/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10636123&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10635256&amp;saveit=Yes" class="preview"><span id="img-wrapper-3992871"><img data-info="3992871-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAO4PilWeFei" id="img3992871" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10635256"></a><a class="title" href="/cubby_view.html?entryid=10635256&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Sensory for 09/21/17</a><br><b>Going to dig up some dirt!</b> <a class="info" href="/cubby_view.html?entryid=10635256&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10618387&amp;saveit=Yes" class="preview"><span id="img-wrapper-3986611"><img data-info="3986611-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAK8MC9WeFei" id="img3986611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10618387"></a><a class="title" href="/cubby_view.html?entryid=10618387&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Sensory for 09/20/17</a><br><b>art! coloring shapes!</b> <a class="info" href="/cubby_view.html?entryid=10618387&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10615361&amp;saveit=Yes" class="preview"><span id="img-wrapper-3985048"><img data-info="3985048-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAK_NipfeFei" id="img3985048" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10615361"></a><a class="title" href="/cubby_view.html?entryid=10615361&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/20/17</a><br><b>riding his bike</b> <a class="info" href="/cubby_view.html?entryid=10615361&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596714&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977860"><img data-info="3977860-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29PihXeFei" id="img3977860" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596714"></a><a class="title" href="/cubby_view.html?entryid=10596714&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 09/19/17</a><br><b>Storytime!</b> <a class="info" href="/cubby_view.html?entryid=10596714&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596287&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977705"><img data-info="3977705-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29MS5SeFei" id="img3977705" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596287"></a><a class="title" href="/cubby_view.html?entryid=10596287&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Music, Social / Emotional for 09/19/17</a><br><b>Dancing and  singing while reading old McDonald!</b> <a class="info" href="/cubby_view.html?entryid=10596287&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596062&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977578"><img data-info="3977578-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29MylfeFei" id="img3977578" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596062"></a><a class="title" href="/cubby_view.html?entryid=10596062&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 09/19/17</a><br><b>dancing while Ms. Kenzie sings!</b> <a class="info" href="/cubby_view.html?entryid=10596062&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10595443&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977346"><img data-info="3977346-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29NSpReFei" id="img3977346" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10595443"></a><a class="title" href="/cubby_view.html?entryid=10595443&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play for 09/19/17</a><br><b>Sebastian is looking the part today!</b> <a class="info" href="/cubby_view.html?entryid=10595443&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10576838&amp;saveit=Yes" class="preview"><span id="img-wrapper-3970428"><img data-info="3970428-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA26MixfeFei" id="img3970428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10576838"></a><a class="title" href="/cubby_view.html?entryid=10576838&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Sensory for 09/18/17</a><br><b>funnels!</b> <a class="info" href="/cubby_view.html?entryid=10576838&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596714&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977860"><img data-info="3977860-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29PihXeFei" id="img3977860" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596714"></a><a class="title" href="/cubby_view.html?entryid=10596714&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 09/19/17</a><br><b>Storytime!</b> <a class="info" href="/cubby_view.html?entryid=10596714&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596287&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977705"><img data-info="3977705-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29MS5SeFei" id="img3977705" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596287"></a><a class="title" href="/cubby_view.html?entryid=10596287&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Music, Social / Emotional for 09/19/17</a><br><b>Dancing and  singing while reading old McDonald!</b> <a class="info" href="/cubby_view.html?entryid=10596287&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596062&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977578"><img data-info="3977578-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29MylfeFei" id="img3977578" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596062"></a><a class="title" href="/cubby_view.html?entryid=10596062&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 09/19/17</a><br><b>dancing while Ms. Kenzie sings!</b> <a class="info" href="/cubby_view.html?entryid=10596062&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10595443&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977346"><img data-info="3977346-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29NSpReFei" id="img3977346" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10595443"></a><a class="title" href="/cubby_view.html?entryid=10595443&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play for 09/19/17</a><br><b>Sebastian is looking the part today!</b> <a class="info" href="/cubby_view.html?entryid=10595443&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10576838&amp;saveit=Yes" class="preview"><span id="img-wrapper-3970428"><img data-info="3970428-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA26MixfeFei" id="img3970428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10576838"></a><a class="title" href="/cubby_view.html?entryid=10576838&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Sensory for 09/18/17</a><br><b>funnels!</b> <a class="info" href="/cubby_view.html?entryid=10576838&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596714&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977860"><img data-info="3977860-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29PihXeFei" id="img3977860" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596714"></a><a class="title" href="/cubby_view.html?entryid=10596714&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 09/19/17</a><br><b>Storytime!</b> <a class="info" href="/cubby_view.html?entryid=10596714&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596287&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977705"><img data-info="3977705-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29MS5SeFei" id="img3977705" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596287"></a><a class="title" href="/cubby_view.html?entryid=10596287&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Music, Social / Emotional for 09/19/17</a><br><b>Dancing and  singing while reading old McDonald!</b> <a class="info" href="/cubby_view.html?entryid=10596287&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10596062&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977578"><img data-info="3977578-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29MylfeFei" id="img3977578" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10596062"></a><a class="title" href="/cubby_view.html?entryid=10596062&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 09/19/17</a><br><b>dancing while Ms. Kenzie sings!</b> <a class="info" href="/cubby_view.html?entryid=10596062&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10595443&amp;saveit=Yes" class="preview"><span id="img-wrapper-3977346"><img data-info="3977346-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA29NSpReFei" id="img3977346" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10595443"></a><a class="title" href="/cubby_view.html?entryid=10595443&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play for 09/19/17</a><br><b>Sebastian is looking the part today!</b> <a class="info" href="/cubby_view.html?entryid=10595443&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10576838&amp;saveit=Yes" class="preview"><span id="img-wrapper-3970428"><img data-info="3970428-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA26MixfeFei" id="img3970428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10576838"></a><a class="title" href="/cubby_view.html?entryid=10576838&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor, Sensory for 09/18/17</a><br><b>funnels!</b> <a class="info" href="/cubby_view.html?entryid=10576838&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10576773&amp;saveit=Yes" class="preview"><span id="img-wrapper-3970402"><img data-info="3970402-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA26Mi5VeFei" id="img3970402" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10576773"></a><a class="title" href="/cubby_view.html?entryid=10576773&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/18/17</a><br><b>driving his dump truck!</b> <a class="info" href="/cubby_view.html?entryid=10576773&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10561950&amp;saveit=Yes" class="preview"><span id="img-wrapper-3967212"><img data-info="3967212-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAy9NC9VeFei" id="img3967212" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10561950"></a><a class="title" href="/cubby_view.html?entryid=10561950&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Large Motor, Math, Music, Sensory for 09/15/17</a><br><b>art!</b> <a class="info" href="/cubby_view.html?entryid=10561950&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10557518&amp;saveit=Yes" class="preview"><span id="img-wrapper-3962791"><img data-info="3962791-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAy4MSdWeFei" id="img3962791" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10557518"></a><a class="title" href="/cubby_view.html?entryid=10557518&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/15/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10557518&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10540596&amp;saveit=Yes" class="preview"><span id="img-wrapper-3956803"><img data-info="3956803-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA-8Pi5UeFei" id="img3956803" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10540596"></a><a class="title" href="/cubby_view.html?entryid=10540596&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development, Social / Emotional for 09/14/17</a><br><b>Storytime!</b> <a class="info" href="/cubby_view.html?entryid=10540596&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10540382&amp;saveit=Yes" class="preview"><span id="img-wrapper-3956684"><img data-info="3956684-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA-8MCZTeFei" id="img3956684" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10540382"></a><a class="title" href="/cubby_view.html?entryid=10540382&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Social / Emotional for 09/14/17</a><br><b>Making shakers!</b> <a class="info" href="/cubby_view.html?entryid=10540382&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10538840&amp;saveit=Yes" class="preview"><span id="img-wrapper-3956109"><img data-info="3956109-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA-8Ny5eeFei" id="img3956109" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10538840"></a><a class="title" href="/cubby_view.html?entryid=10538840&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play for 09/14/17</a><br><b>good morning</b> <a class="info" href="/cubby_view.html?entryid=10538840&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10519593&amp;saveit=Yes" class="preview"><span id="img-wrapper-3947950"><img data-info="3947950-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA69PytXeFei" id="img3947950" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10519593"></a><a class="title" href="/cubby_view.html?entryid=10519593&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/13/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10519593&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10502871&amp;saveit=Yes" class="preview"><span id="img-wrapper-3941391"><img data-info="3941391-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA67NSdWeFei" id="img3941391" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10502871"></a><a class="title" href="/cubby_view.html?entryid=10502871&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Print Literacy Development for 09/12/17</a><br><b>writing our name</b> <a class="info" href="/cubby_view.html?entryid=10502871&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10502811&amp;saveit=Yes" class="preview"><span id="img-wrapper-3941347"><img data-info="3941347-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA67NSpQeFei" id="img3941347" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10502811"></a><a class="title" href="/cubby_view.html?entryid=10502811&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Print Literacy Development for 09/12/17</a><br><b>writing our name</b> <a class="info" href="/cubby_view.html?entryid=10502811&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10501042&amp;saveit=Yes" class="preview"><span id="img-wrapper-3940695"><img data-info="3940695-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZA66MCdSeFei" id="img3940695" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10501042"></a><a class="title" href="/cubby_view.html?entryid=10501042&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional, Technology, Sensory for 09/12/17</a><br><b>loves the bikes</b> <a class="info" href="/cubby_view.html?entryid=10501042&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10486448&amp;saveit=Yes" class="preview"><span id="img-wrapper-3935107"><img data-info="3935107-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm_Ny5QeFei" id="img3935107" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10486448"></a><a class="title" href="/cubby_view.html?entryid=10486448&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 09/11/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10486448&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10485099&amp;saveit=Yes" class="preview"><span id="img-wrapper-3934590"><img data-info="3934590-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm-MydXeFei" id="img3934590" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10485099"></a><a class="title" href="/cubby_view.html?entryid=10485099&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/11/17</a><br><b>going for a run</b> <a class="info" href="/cubby_view.html?entryid=10485099&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10473743&amp;saveit=Yes" class="preview"><span id="img-wrapper-3932634"><img data-info="3932634-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm4MC1TeFei" id="img3932634" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10473743"></a><a class="title" href="/cubby_view.html?entryid=10473743&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication for 09/08/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10473743&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10473421&amp;saveit=Yes" class="preview"><span id="img-wrapper-3932245"><img data-info="3932245-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm4NCpSeFei" id="img3932245" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10473421"></a><a class="title" href="/cubby_view.html?entryid=10473421&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 09/08/17</a><br><b>bumper cars</b> <a class="info" href="/cubby_view.html?entryid=10473421&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10468051&amp;saveit=Yes" class="preview"><span id="img-wrapper-3927264"><img data-info="3927264-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAi9NChTeFei" id="img3927264" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10468051"></a><a class="title" href="/cubby_view.html?entryid=10468051&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional, Sensory for 09/08/17</a><br><b>good morning</b> <a class="info" href="/cubby_view.html?entryid=10468051&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10486448&amp;saveit=Yes" class="preview"><span id="img-wrapper-3935107"><img data-info="3935107-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm_Ny5QeFei" id="img3935107" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10486448"></a><a class="title" href="/cubby_view.html?entryid=10486448&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 09/11/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10486448&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10485099&amp;saveit=Yes" class="preview"><span id="img-wrapper-3934590"><img data-info="3934590-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm-MydXeFei" id="img3934590" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10485099"></a><a class="title" href="/cubby_view.html?entryid=10485099&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/11/17</a><br><b>going for a run</b> <a class="info" href="/cubby_view.html?entryid=10485099&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10473743&amp;saveit=Yes" class="preview"><span id="img-wrapper-3932634"><img data-info="3932634-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm4MC1TeFei" id="img3932634" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10473743"></a><a class="title" href="/cubby_view.html?entryid=10473743&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication for 09/08/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10473743&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10473421&amp;saveit=Yes" class="preview"><span id="img-wrapper-3932245"><img data-info="3932245-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAm4NCpSeFei" id="img3932245" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10473421"></a><a class="title" href="/cubby_view.html?entryid=10473421&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 09/08/17</a><br><b>bumper cars</b> <a class="info" href="/cubby_view.html?entryid=10473421&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10468051&amp;saveit=Yes" class="preview"><span id="img-wrapper-3927264"><img data-info="3927264-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAi9NChTeFei" id="img3927264" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10468051"></a><a class="title" href="/cubby_view.html?entryid=10468051&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional, Sensory for 09/08/17</a><br><b>good morning</b> <a class="info" href="/cubby_view.html?entryid=10468051&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10452831&amp;saveit=Yes" class="preview"><span id="img-wrapper-3920637"><img data-info="3920637-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAi6MC1QeFei" id="img3920637" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10452831"></a><a class="title" href="/cubby_view.html?entryid=10452831&amp;saveit=Yes">Art for 09/07/17</a><br><b>coloring leaves and acorns</b> <a class="info" href="/cubby_view.html?entryid=10452831&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10438764&amp;saveit=Yes" class="preview"><span id="img-wrapper-3918437"><img data-info="3918437-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAuyMi1QeFei" id="img3918437" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10438764"></a><a class="title" href="/cubby_view.html?entryid=10438764&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 09/06/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10438764&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10438720&amp;saveit=Yes" class="preview"><span id="img-wrapper-3918396"><img data-info="3918396-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAuyNSdReFei" id="img3918396" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10438720"></a><a class="title" href="/cubby_view.html?entryid=10438720&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, English Learner Development, Fine Motor, Language / Vocal Communication, Large Motor for 09/06/17</a><br><b>who you going to call</b> <a class="info" href="/cubby_view.html?entryid=10438720&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10413180&amp;saveit=Yes" class="preview"><span id="img-wrapper-3905546"><img data-info="3905546-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAq_MypReFei" id="img3905546" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10413180"></a><a class="title" href="/cubby_view.html?entryid=10413180&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 09/05/17</a><br><b>my car</b> <a class="info" href="/cubby_view.html?entryid=10413180&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10413152&amp;saveit=Yes" class="preview"><span id="img-wrapper-3905539"><img data-info="3905539-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZAq_My1eeFei" id="img3905539" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10413152"></a><a class="title" href="/cubby_view.html?entryid=10413152&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 09/05/17</a><br><b>speed racers</b> <a class="info" href="/cubby_view.html?entryid=10413152&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10396234&amp;saveit=Yes" class="preview"><span id="img-wrapper-3899732"><img data-info="3899732-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQOzMS1VeFei" id="img3899732" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10396234"></a><a class="title" href="/cubby_view.html?entryid=10396234&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 09/01/17</a><br><b>good morning</b> <a class="info" href="/cubby_view.html?entryid=10396234&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10382391&amp;saveit=Yes" class="preview"><span id="img-wrapper-3894288"><img data-info="3894288-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQO-NCZfeFei" id="img3894288" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10382391"></a><a class="title" href="/cubby_view.html?entryid=10382391&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Math, Social / Emotional, Sensory for 08/31/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10382391&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10381459&amp;saveit=Yes" class="preview"><span id="img-wrapper-3893856"><img data-info="3893856-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQO5PitReFei" id="img3893856" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10381459"></a><a class="title" href="/cubby_view.html?entryid=10381459&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 08/31/17</a><br><b>morning fun</b> <a class="info" href="/cubby_view.html?entryid=10381459&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10380819&amp;saveit=Yes" class="preview"><span id="img-wrapper-3893676"><img data-info="3893676-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQO5MClReFei" id="img3893676" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10380819"></a><a class="title" href="/cubby_view.html?entryid=10380819&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/31/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10380819&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10367010&amp;saveit=Yes" class="preview"><span id="img-wrapper-3889366"><img data-info="3889366-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQKzNShReFei" id="img3889366" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10367010"></a><a class="title" href="/cubby_view.html?entryid=10367010&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Sensory for 08/30/17</a><br><b>our bubble wrap stomp creation</b> <a class="info" href="/cubby_view.html?entryid=10367010&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10396234&amp;saveit=Yes" class="preview"><span id="img-wrapper-3899732"><img data-info="3899732-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQOzMS1VeFei" id="img3899732" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10396234"></a><a class="title" href="/cubby_view.html?entryid=10396234&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 09/01/17</a><br><b>good morning</b> <a class="info" href="/cubby_view.html?entryid=10396234&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10382391&amp;saveit=Yes" class="preview"><span id="img-wrapper-3894288"><img data-info="3894288-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQO-NCZfeFei" id="img3894288" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10382391"></a><a class="title" href="/cubby_view.html?entryid=10382391&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Math, Social / Emotional, Sensory for 08/31/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10382391&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10381459&amp;saveit=Yes" class="preview"><span id="img-wrapper-3893856"><img data-info="3893856-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQO5PitReFei" id="img3893856" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10381459"></a><a class="title" href="/cubby_view.html?entryid=10381459&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 08/31/17</a><br><b>morning fun</b> <a class="info" href="/cubby_view.html?entryid=10381459&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10380819&amp;saveit=Yes" class="preview"><span id="img-wrapper-3893676"><img data-info="3893676-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQO5MClReFei" id="img3893676" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10380819"></a><a class="title" href="/cubby_view.html?entryid=10380819&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/31/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10380819&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10367010&amp;saveit=Yes" class="preview"><span id="img-wrapper-3889366"><img data-info="3889366-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQKzNShReFei" id="img3889366" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10367010"></a><a class="title" href="/cubby_view.html?entryid=10367010&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Sensory for 08/30/17</a><br><b>our bubble wrap stomp creation</b> <a class="info" href="/cubby_view.html?entryid=10367010&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10366981&amp;saveit=Yes" class="preview"><span id="img-wrapper-3889330"><img data-info="3889330-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQKzNS1XeFei" id="img3889330" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10366981"></a><a class="title" href="/cubby_view.html?entryid=10366981&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Sensory for 08/30/17</a><br><b>bubble wrap stomp</b> <a class="info" href="/cubby_view.html?entryid=10366981&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10363865&amp;saveit=Yes" class="preview"><span id="img-wrapper-3887233"><img data-info="3887233-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQK9NC1UeFei" id="img3887233" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10363865"></a><a class="title" href="/cubby_view.html?entryid=10363865&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/30/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10363865&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10351139&amp;saveit=Yes" class="preview"><span id="img-wrapper-3885552"><img data-info="3885552-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQK_MytVeFei" id="img3885552" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10351139"></a><a class="title" href="/cubby_view.html?entryid=10351139&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10351139&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10347607&amp;saveit=Yes" class="preview"><span id="img-wrapper-3881700"><img data-info="3881700-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQK7MS5XeFei" id="img3881700" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10347607"></a><a class="title" href="/cubby_view.html?entryid=10347607&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Sensory for 08/29/17</a><br><b>learning about shapes and patterns</b> <a class="info" href="/cubby_view.html?entryid=10347607&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10329352&amp;saveit=Yes" class="preview"><span id="img-wrapper-3875344"><img data-info="3875344-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ2_NSpTeFei" id="img3875344" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10329352"></a><a class="title" href="/cubby_view.html?entryid=10329352&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 08/28/17</a><br><b>Sebastian being silly</b> <a class="info" href="/cubby_view.html?entryid=10329352&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10329309&amp;saveit=Yes" class="preview"><span id="img-wrapper-3875314"><img data-info="3875314-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ2_NS9TeFei" id="img3875314" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10329309"></a><a class="title" href="/cubby_view.html?entryid=10329309&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 08/28/17</a><br><b>exploring the outside</b> <a class="info" href="/cubby_view.html?entryid=10329309&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10301146&amp;saveit=Yes" class="preview"><span id="img-wrapper-3868362"><img data-info="3868362-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQyyNShVeFei" id="img3868362" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10301146"></a><a class="title" href="/cubby_view.html?entryid=10301146&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Sensory for 08/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10301146&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10296807&amp;saveit=Yes" class="preview"><span id="img-wrapper-3864212"><img data-info="3864212-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQy-NC9VeFei" id="img3864212" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10296807"></a><a class="title" href="/cubby_view.html?entryid=10296807&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor for 08/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10296807&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10279922&amp;saveit=Yes" class="preview"><span id="img-wrapper-3858437"><img data-info="3858437-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-yMi1QeFei" id="img3858437" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10279922"></a><a class="title" href="/cubby_view.html?entryid=10279922&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Sensory for 08/23/17</a><br><b>future teachers</b> <a class="info" href="/cubby_view.html?entryid=10279922&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10279035&amp;saveit=Yes" class="preview"><span id="img-wrapper-3858094"><img data-info="3858094-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-yNidTeFei" id="img3858094" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10279035"></a><a class="title" href="/cubby_view.html?entryid=10279035&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 08/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10279035&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10329309&amp;saveit=Yes" class="preview"><span id="img-wrapper-3875314"><img data-info="3875314-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ2_NS9TeFei" id="img3875314" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10329309"></a><a class="title" href="/cubby_view.html?entryid=10329309&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 08/28/17</a><br><b>exploring the outside</b> <a class="info" href="/cubby_view.html?entryid=10329309&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10301146&amp;saveit=Yes" class="preview"><span id="img-wrapper-3868362"><img data-info="3868362-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQyyNShVeFei" id="img3868362" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10301146"></a><a class="title" href="/cubby_view.html?entryid=10301146&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Sensory for 08/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10301146&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10296807&amp;saveit=Yes" class="preview"><span id="img-wrapper-3864212"><img data-info="3864212-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQy-NC9VeFei" id="img3864212" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10296807"></a><a class="title" href="/cubby_view.html?entryid=10296807&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor for 08/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10296807&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10279922&amp;saveit=Yes" class="preview"><span id="img-wrapper-3858437"><img data-info="3858437-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-yMi1QeFei" id="img3858437" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10279922"></a><a class="title" href="/cubby_view.html?entryid=10279922&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Sensory for 08/23/17</a><br><b>future teachers</b> <a class="info" href="/cubby_view.html?entryid=10279922&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10279035&amp;saveit=Yes" class="preview"><span id="img-wrapper-3858094"><img data-info="3858094-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-yNidTeFei" id="img3858094" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10279035"></a><a class="title" href="/cubby_view.html?entryid=10279035&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 08/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10279035&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10329309&amp;saveit=Yes" class="preview"><span id="img-wrapper-3875314"><img data-info="3875314-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ2_NS9TeFei" id="img3875314" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10329309"></a><a class="title" href="/cubby_view.html?entryid=10329309&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 08/28/17</a><br><b>exploring the outside</b> <a class="info" href="/cubby_view.html?entryid=10329309&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10301146&amp;saveit=Yes" class="preview"><span id="img-wrapper-3868362"><img data-info="3868362-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQyyNShVeFei" id="img3868362" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10301146"></a><a class="title" href="/cubby_view.html?entryid=10301146&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Sensory for 08/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10301146&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10296807&amp;saveit=Yes" class="preview"><span id="img-wrapper-3864212"><img data-info="3864212-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQy-NC9VeFei" id="img3864212" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10296807"></a><a class="title" href="/cubby_view.html?entryid=10296807&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor for 08/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10296807&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10279922&amp;saveit=Yes" class="preview"><span id="img-wrapper-3858437"><img data-info="3858437-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-yMi1QeFei" id="img3858437" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10279922"></a><a class="title" href="/cubby_view.html?entryid=10279922&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Sensory for 08/23/17</a><br><b>future teachers</b> <a class="info" href="/cubby_view.html?entryid=10279922&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10279035&amp;saveit=Yes" class="preview"><span id="img-wrapper-3858094"><img data-info="3858094-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-yNidTeFei" id="img3858094" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10279035"></a><a class="title" href="/cubby_view.html?entryid=10279035&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 08/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10279035&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10267022&amp;saveit=Yes" class="preview"><span id="img-wrapper-3857065"><img data-info="3857065-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-9NihSeFei" id="img3857065" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10267022"></a><a class="title" href="/cubby_view.html?entryid=10267022&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/22/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10267022&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10266503&amp;saveit=Yes" class="preview"><span id="img-wrapper-3856529"><img data-info="3856529-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-8MyxeeFei" id="img3856529" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10266503"></a><a class="title" href="/cubby_view.html?entryid=10266503&amp;saveit=Yes">Social / Emotional for 08/22/17</a><br><b>hey Mom and Dad</b> <a class="info" href="/cubby_view.html?entryid=10266503&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10262833&amp;saveit=Yes" class="preview"><span id="img-wrapper-3852940"><img data-info="3852940-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-4PypXeFei" id="img3852940" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10262833"></a><a class="title" href="/cubby_view.html?entryid=10262833&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 08/22/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10262833&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10249617&amp;saveit=Yes" class="preview"><span id="img-wrapper-3850997"><img data-info="3850997-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ-6PydQeFei" id="img3850997" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10249617"></a><a class="title" href="/cubby_view.html?entryid=10249617&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/21/17</a><br><b>good afternoon Mom and dad</b> <a class="info" href="/cubby_view.html?entryid=10249617&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10245168&amp;saveit=Yes" class="preview"><span id="img-wrapper-3847477"><img data-info="3847477-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ69MilQeFei" id="img3847477" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10245168"></a><a class="title" href="/cubby_view.html?entryid=10245168&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/21/17</a><br><b>painting our school buses</b> <a class="info" href="/cubby_view.html?entryid=10245168&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230400"></a><a class="title" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230396"></a><a class="title" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" class="preview"><span id="img-wrapper-3841310"><img data-info="3841310-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ67NS9XeFei" id="img3841310" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10229538"></a><a class="title" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835664"><img data-info="3835664-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChTeFei" id="img3835664" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214055"></a><a class="title" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>do you see my car ??</b> <a class="info" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835660"><img data-info="3835660-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChXeFei" id="img3835660" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214043"></a><a class="title" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>love you</b> <a class="info" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230400"></a><a class="title" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230396"></a><a class="title" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" class="preview"><span id="img-wrapper-3841310"><img data-info="3841310-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ67NS9XeFei" id="img3841310" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10229538"></a><a class="title" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835664"><img data-info="3835664-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChTeFei" id="img3835664" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214055"></a><a class="title" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>do you see my car ??</b> <a class="info" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835660"><img data-info="3835660-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChXeFei" id="img3835660" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214043"></a><a class="title" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>love you</b> <a class="info" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230400"></a><a class="title" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230396"></a><a class="title" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" class="preview"><span id="img-wrapper-3841310"><img data-info="3841310-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ67NS9XeFei" id="img3841310" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10229538"></a><a class="title" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835664"><img data-info="3835664-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChTeFei" id="img3835664" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214055"></a><a class="title" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>do you see my car ??</b> <a class="info" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835660"><img data-info="3835660-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChXeFei" id="img3835660" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214043"></a><a class="title" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>love you</b> <a class="info" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230400"></a><a class="title" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230400&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10230396"></a><a class="title" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 08/18/17</a><br><b>ice painting</b> <a class="info" href="/cubby_view.html?entryid=10230396&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" class="preview"><span id="img-wrapper-3841310"><img data-info="3841310-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQ67NS9XeFei" id="img3841310" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10229538"></a><a class="title" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor, Large Motor for 08/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10229538&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835664"><img data-info="3835664-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChTeFei" id="img3835664" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214055"></a><a class="title" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>do you see my car ??</b> <a class="info" href="/cubby_view.html?entryid=10214055&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" class="preview"><span id="img-wrapper-3835660"><img data-info="3835660-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm_MChXeFei" id="img3835660" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10214043"></a><a class="title" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes">Social / Emotional for 08/17/17</a><br><b>love you</b> <a class="info" href="/cubby_view.html?entryid=10214043&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10200246&amp;saveit=Yes" class="preview"><span id="img-wrapper-3833148"><img data-info="3833148-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm5NypfeFei" id="img3833148" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10200246"></a><a class="title" href="/cubby_view.html?entryid=10200246&amp;saveit=Yes">Social / Emotional for 08/16/17</a><br><b>checking out my reflection</b> <a class="info" href="/cubby_view.html?entryid=10200246&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10200232&amp;saveit=Yes" class="preview"><span id="img-wrapper-3833116"><img data-info="3833116-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm5Ny9ReFei" id="img3833116" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10200232"></a><a class="title" href="/cubby_view.html?entryid=10200232&amp;saveit=Yes">Social / Emotional for 08/16/17</a><br><b>being silly</b> <a class="info" href="/cubby_view.html?entryid=10200232&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10200225&amp;saveit=Yes" class="preview"><span id="img-wrapper-3833101"><img data-info="3833101-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQm5Ny5WeFei" id="img3833101" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10200225"></a><a class="title" href="/cubby_view.html?entryid=10200225&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/16/17</a><br><b>hey mom</b> <a class="info" href="/cubby_view.html?entryid=10200225&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10160296&amp;saveit=Yes" class="preview"><span id="img-wrapper-3816573"><img data-info="3816573-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQu8MylUeFei" id="img3816573" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10160296"></a><a class="title" href="/cubby_view.html?entryid=10160296&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/14/17</a><br><b>fun in the gym</b> <a class="info" href="/cubby_view.html?entryid=10160296&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10160157&amp;saveit=Yes" class="preview"><span id="img-wrapper-3816557"><img data-info="3816557-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQu8MytQeFei" id="img3816557" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10160157"></a><a class="title" href="/cubby_view.html?entryid=10160157&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/14/17</a><br><b>i see crazy drivers in the future</b> <a class="info" href="/cubby_view.html?entryid=10160157&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10145385&amp;saveit=Yes" class="preview"><span id="img-wrapper-3810663"><img data-info="3810663-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQu6MChUeFei" id="img3810663" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10145385"></a><a class="title" href="/cubby_view.html?entryid=10145385&amp;saveit=Yes">Social / Emotional for 08/11/17</a><br><b>good morning</b> <a class="info" href="/cubby_view.html?entryid=10145385&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10144964&amp;saveit=Yes" class="preview"><span id="img-wrapper-3810492"><img data-info="3810492-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQu6MidVeFei" id="img3810492" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10144964"></a><a class="title" href="/cubby_view.html?entryid=10144964&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/11/17</a><br><b>beep beep coming thru</b> <a class="info" href="/cubby_view.html?entryid=10144964&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10134455&amp;saveit=Yes" class="preview"><span id="img-wrapper-3809073"><img data-info="3809073-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQqzNilUeFei" id="img3809073" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10134455"></a><a class="title" href="/cubby_view.html?entryid=10134455&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Fine Motor for 08/10/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10134455&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10134384&amp;saveit=Yes" class="preview"><span id="img-wrapper-3808992"><img data-info="3808992-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQqyPydVeFei" id="img3808992" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10134384"></a><a class="title" href="/cubby_view.html?entryid=10134384&amp;saveit=Yes">08/10/17</a><br><b>incident report</b> <a class="info" href="/cubby_view.html?entryid=10134384&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10134203&amp;saveit=Yes" class="preview"><span id="img-wrapper-3808657"><img data-info="3808657-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQqyMCtQeFei" id="img3808657" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10134203"></a><a class="title" href="/cubby_view.html?entryid=10134203&amp;saveit=Yes">Fine Motor for 08/10/17</a><br><b>the letter T</b> <a class="info" href="/cubby_view.html?entryid=10134203&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10130348&amp;saveit=Yes" class="preview"><span id="img-wrapper-3804767"><img data-info="3804767-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQq-MShQeFei" id="img3804767" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10130348"></a><a class="title" href="/cubby_view.html?entryid=10130348&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/10/17</a><br><b>good morning mom</b> <a class="info" href="/cubby_view.html?entryid=10130348&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10130244&amp;saveit=Yes" class="preview"><span id="img-wrapper-3804722"><img data-info="3804722-90-0" src="https://www.lifecubby.me/i/rmrmJYwEZQq-MSxVeFei" id="img3804722" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10130244"></a><a class="title" href="/cubby_view.html?entryid=10130244&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/10/17</a><br><b>Sebastian where you  going</b> <a class="info" href="/cubby_view.html?entryid=10130244&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10097861&amp;saveit=Yes" class="preview"><span id="img-wrapper-3792901"><img data-info="3792901-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagO4Py5WeFei" id="img3792901" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10097861"></a><a class="title" href="/cubby_view.html?entryid=10097861&amp;saveit=Yes">Dramatic Play for 08/08/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10097861&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10080799&amp;saveit=Yes" class="preview"><span id="img-wrapper-3786843"><img data-info="3786843-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagK8PipUeFei" id="img3786843" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10080799"></a><a class="title" href="/cubby_view.html?entryid=10080799&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/07/17</a><br><b>outside fun</b> <a class="info" href="/cubby_view.html?entryid=10080799&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10080734&amp;saveit=Yes" class="preview"><span id="img-wrapper-3786822"><img data-info="3786822-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagK8PixVeFei" id="img3786822" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10080734"></a><a class="title" href="/cubby_view.html?entryid=10080734&amp;saveit=Yes">Approaches to Learning / Cognitive for 08/07/17</a><br><b>bumper  cars</b> <a class="info" href="/cubby_view.html?entryid=10080734&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10050078&amp;saveit=Yes" class="preview"><span id="img-wrapper-3775237"><img data-info="3775237-90-0" src="https://www.lifecubby.me/i/rmrmJYwEag2_NC1QeFei" id="img3775237" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10050078"></a><a class="title" href="/cubby_view.html?entryid=10050078&amp;saveit=Yes">Art, Fine Motor, Science, Sensory for 08/03/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=10050078&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10034492&amp;saveit=Yes" class="preview"><span id="img-wrapper-3769340"><img data-info="3769340-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagyzNSpXeFei" id="img3769340" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10034492"></a><a class="title" href="/cubby_view.html?entryid=10034492&amp;saveit=Yes">Approaches to Learning / Cognitive, Science, Sensory for 08/02/17</a><br><b>investigating ice! find the bug!</b> <a class="info" href="/cubby_view.html?entryid=10034492&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10034446&amp;saveit=Yes" class="preview"><span id="img-wrapper-3769340"><img data-info="3769340-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagyzNSpXeFei" id="img3769340" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10034446"></a><a class="title" href="/cubby_view.html?entryid=10034446&amp;saveit=Yes">Approaches to Learning / Cognitive, Science, Sensory for 08/02/17</a><br><b>investigating ice! find the bug!</b> <a class="info" href="/cubby_view.html?entryid=10034446&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10034306&amp;saveit=Yes" class="preview"><span id="img-wrapper-3769340"><img data-info="3769340-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagyzNSpXeFei" id="img3769340" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10034306"></a><a class="title" href="/cubby_view.html?entryid=10034306&amp;saveit=Yes">Approaches to Learning / Cognitive, Science, Sensory for 08/02/17</a><br><b>Discovering ice! find the bug!</b> <a class="info" href="/cubby_view.html?entryid=10034306&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10033722&amp;saveit=Yes" class="preview"><span id="img-wrapper-3769151"><img data-info="3769151-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagyzNytWeFei" id="img3769151" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10033722"></a><a class="title" href="/cubby_view.html?entryid=10033722&amp;saveit=Yes">Approaches to Learning / Cognitive, Science, Social Studies for 08/02/17</a><br><b>hi birdie!</b> <a class="info" href="/cubby_view.html?entryid=10033722&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10006548&amp;saveit=Yes" class="preview"><span id="img-wrapper-3762218"><img data-info="3762218-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagy4NC9feFei" id="img3762218" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10006548"></a><a class="title" href="/cubby_view.html?entryid=10006548&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Sensory for 07/31/17</a><br><b>Contact paper! Makes noise when you step on it!</b> <a class="info" href="/cubby_view.html?entryid=10006548&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10006305&amp;saveit=Yes" class="preview"><img src="/images/generic-observations.jpg" width="45" height="45" style="padding: 2px"></a>
<div class="entry-details with-image"><a name="10006305"></a><a class="title" href="/cubby_view.html?entryid=10006305&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor for 07/31/17</a><br><b>"Bike"</b> <a class="info" href="/cubby_view.html?entryid=10006305&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10001474&amp;saveit=Yes" class="preview"><span id="img-wrapper-3757790"><img data-info="3757790-90-0" src="https://www.lifecubby.me/i/rmrmJYwEag-9MSdXeFei" id="img3757790" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10001474"></a><a class="title" href="/cubby_view.html?entryid=10001474&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Large Motor for 07/31/17</a><br><b>Finding the perfect toy!</b> <a class="info" href="/cubby_view.html?entryid=10001474&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=10001220&amp;saveit=Yes" class="preview"><span id="img-wrapper-3757743"><img data-info="3757743-90-0" src="https://www.lifecubby.me/i/rmrmJYwEag-9MSpUeFei" id="img3757743" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="10001220"></a><a class="title" href="/cubby_view.html?entryid=10001220&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor for 07/31/17</a><br><b>"truck!"</b> <a class="info" href="/cubby_view.html?entryid=10001220&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9971467&amp;saveit=Yes" class="preview"><span id="img-wrapper-3746418"><img data-info="3746418-90-0" src="https://www.lifecubby.me/i/rmrmJYwEag68Mi9feFei" id="img3746418" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9971467"></a><a class="title" href="/cubby_view.html?entryid=9971467&amp;saveit=Yes">English Learner Development, Large Motor, Social / Emotional for 07/27/17</a><br><b>He says "vroom!"</b> <a class="info" href="/cubby_view.html?entryid=9971467&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9971355&amp;saveit=Yes" class="preview"><span id="img-wrapper-3746396"><img data-info="3746396-90-0" src="https://www.lifecubby.me/i/rmrmJYwEag68NSdReFei" id="img3746396" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9971355"></a><a class="title" href="/cubby_view.html?entryid=9971355&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 07/27/17</a><br><b>friends!</b> <a class="info" href="/cubby_view.html?entryid=9971355&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9957462&amp;saveit=Yes" class="preview"><span id="img-wrapper-3741393"><img data-info="3741393-90-0" src="https://www.lifecubby.me/i/rmrmJYwEag67NSdUeFei" id="img3741393" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9957462"></a><a class="title" href="/cubby_view.html?entryid=9957462&amp;saveit=Yes">Approaches to Learning / Cognitive, English Learner Development, Language / Vocal Communication, Print Literacy Development for 07/26/17</a><br><b>Circle Time</b><br>reading books during circle time <a class="info" href="/cubby_view.html?entryid=9957462&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9944864&amp;saveit=Yes" class="preview"><span id="img-wrapper-3739203"><img data-info="3739203-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagmzNC5UeFei" id="img3739203" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9944864"></a><a class="title" href="/cubby_view.html?entryid=9944864&amp;saveit=Yes">Sensory for 07/25/17</a><br><b>water play!</b> <a class="info" href="/cubby_view.html?entryid=9944864&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9940255&amp;saveit=Yes" class="preview"><span id="img-wrapper-3734683"><img data-info="3734683-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagm-MCZUeFei" id="img3734683" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9940255"></a><a class="title" href="/cubby_view.html?entryid=9940255&amp;saveit=Yes">Sensory for 07/25/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9940255&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9940012&amp;saveit=Yes" class="preview"><span id="img-wrapper-3734616"><img data-info="3734616-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagm-MC9ReFei" id="img3734616" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9940012"></a><a class="title" href="/cubby_view.html?entryid=9940012&amp;saveit=Yes">Health / Safety / Nutrition, Sensory for 07/25/17</a><br><b>sprinkler day!</b> <a class="info" href="/cubby_view.html?entryid=9940012&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9928989&amp;saveit=Yes" class="preview"><span id="img-wrapper-3733270"><img data-info="3733270-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagm5NClXeFei" id="img3733270" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9928989"></a><a class="title" href="/cubby_view.html?entryid=9928989&amp;saveit=Yes">Large Motor for 07/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9928989&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9913486&amp;saveit=Yes" class="preview"><span id="img-wrapper-3727775"><img data-info="3727775-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagi9MSlSeFei" id="img3727775" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9913486"></a><a class="title" href="/cubby_view.html?entryid=9913486&amp;saveit=Yes">Large Motor for 07/21/17</a><br><b>fun playing with cones!</b> <a class="info" href="/cubby_view.html?entryid=9913486&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9908440&amp;saveit=Yes" class="preview"><span id="img-wrapper-3723670"><img data-info="3723670-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagi5MClXeFei" id="img3723670" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9908440"></a><a class="title" href="/cubby_view.html?entryid=9908440&amp;saveit=Yes">Fine Motor, Social / Emotional for 07/21/17</a><br><b>having fun</b> <a class="info" href="/cubby_view.html?entryid=9908440&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9908172&amp;saveit=Yes" class="preview"><span id="img-wrapper-3723644"><img data-info="3723644-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagi5MCpTeFei" id="img3723644" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9908172"></a><a class="title" href="/cubby_view.html?entryid=9908172&amp;saveit=Yes">Social / Emotional for 07/21/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9908172&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9894819&amp;saveit=Yes" class="preview"><span id="img-wrapper-3717790"><img data-info="3717790-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu9MSdXeFei" id="img3717790" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9894819"></a><a class="title" href="/cubby_view.html?entryid=9894819&amp;saveit=Yes">Art for 07/20/17</a><br><b>painting with broccoli!</b> <a class="info" href="/cubby_view.html?entryid=9894819&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9894008&amp;saveit=Yes" class="preview"><span id="img-wrapper-3717432"><img data-info="3717432-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu9Mi1VeFei" id="img3717432" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9894008"></a><a class="title" href="/cubby_view.html?entryid=9894008&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Large Motor, Social / Emotional for 07/20/17</a><br><b>They made up a game where they sit along the wall and then run screaming to the other side of the gym :) :)</b> <a class="info" href="/cubby_view.html?entryid=9894008&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9893621&amp;saveit=Yes" class="preview"><span id="img-wrapper-3717277"><img data-info="3717277-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu9NClQeFei" id="img3717277" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9893621"></a><a class="title" href="/cubby_view.html?entryid=9893621&amp;saveit=Yes">Large Motor for 07/20/17</a><br><b>gym time!</b> <a class="info" href="/cubby_view.html?entryid=9893621&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9881039&amp;saveit=Yes" class="preview"><span id="img-wrapper-3713046"><img data-info="3713046-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu5NipReFei" id="img3713046" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9881039"></a><a class="title" href="/cubby_view.html?entryid=9881039&amp;saveit=Yes">Sensory for 07/19/17</a><br><b>sprinkler fun from yesterday</b> <a class="info" href="/cubby_view.html?entryid=9881039&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9880998&amp;saveit=Yes" class="preview"><span id="img-wrapper-3712974"><img data-info="3712974-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu4PylTeFei" id="img3712974" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9880998"></a><a class="title" href="/cubby_view.html?entryid=9880998&amp;saveit=Yes">Sensory for 07/19/17</a><br><b>from yesterday</b> <a class="info" href="/cubby_view.html?entryid=9880998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9880802&amp;saveit=Yes" class="preview"><span id="img-wrapper-3712692"><img data-info="3712692-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu4MCdVeFei" id="img3712692" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9880802"></a><a class="title" href="/cubby_view.html?entryid=9880802&amp;saveit=Yes">Health / Safety / Nutrition for 07/19/17</a><br><b>Trying lemons! he says, "all done!"  Not a big fan!</b> <a class="info" href="/cubby_view.html?entryid=9880802&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9877992&amp;saveit=Yes" class="preview"><span id="img-wrapper-3710757"><img data-info="3710757-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagu6MStQeFei" id="img3710757" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9877992"></a><a class="title" href="/cubby_view.html?entryid=9877992&amp;saveit=Yes">Social / Emotional for 07/19/17</a><br><b>hi kangaroo friends!</b> <a class="info" href="/cubby_view.html?entryid=9877992&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9865833&amp;saveit=Yes" class="preview"><span id="img-wrapper-3708331"><img data-info="3708331-90-0" src="https://www.lifecubby.me/i/rmrmJYwEagqyNS1WeFei" id="img3708331" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9865833"></a><a class="title" href="/cubby_view.html?entryid=9865833&amp;saveit=Yes">07/18/17</a><br><b></b><br>nothing too bad, just a red mark at this point <a class="info" href="/cubby_view.html?entryid=9865833&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9834043&amp;saveit=Yes" class="preview"><span id="img-wrapper-3696782"><img data-info="3696782-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawO8MSZVeFei" id="img3696782" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9834043"></a><a class="title" href="/cubby_view.html?entryid=9834043&amp;saveit=Yes">07/14/17</a><br><b>incident report</b> <a class="info" href="/cubby_view.html?entryid=9834043&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9831185&amp;saveit=Yes" class="preview"><span id="img-wrapper-3693790"><img data-info="3693790-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawO5MSdXeFei" id="img3693790" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9831185"></a><a class="title" href="/cubby_view.html?entryid=9831185&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 07/14/17</a><br><b>neither of us asked them to sit down! they just know it's circle time! :) :)</b> <a class="info" href="/cubby_view.html?entryid=9831185&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9830764&amp;saveit=Yes" class="preview"><span id="img-wrapper-3693601"><img data-info="3693601-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawO5MC5WeFei" id="img3693601" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9830764"></a><a class="title" href="/cubby_view.html?entryid=9830764&amp;saveit=Yes">Large Motor for 07/14/17</a><br><b>bikes</b> <a class="info" href="/cubby_view.html?entryid=9830764&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9815834&amp;saveit=Yes" class="preview"><span id="img-wrapper-3687383"><img data-info="3687383-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawK9NSZUeFei" id="img3687383" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9815834"></a><a class="title" href="/cubby_view.html?entryid=9815834&amp;saveit=Yes">Art for 07/13/17</a><br><b>easier to use my hand! :)</b> <a class="info" href="/cubby_view.html?entryid=9815834&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9814740&amp;saveit=Yes" class="preview"><span id="img-wrapper-3687022"><img data-info="3687022-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawK9NixVeFei" id="img3687022" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9814740"></a><a class="title" href="/cubby_view.html?entryid=9814740&amp;saveit=Yes">Large Motor for 07/13/17</a><br><b>outside finally!</b> <a class="info" href="/cubby_view.html?entryid=9814740&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9799881&amp;saveit=Yes" class="preview"><span id="img-wrapper-3681138"><img data-info="3681138-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawK7Ny1feFei" id="img3681138" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9799881"></a><a class="title" href="/cubby_view.html?entryid=9799881&amp;saveit=Yes">Art for 07/12/17</a><br><b>chalk coloring</b> <a class="info" href="/cubby_view.html?entryid=9799881&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9782042&amp;saveit=Yes" class="preview"><span id="img-wrapper-3674579"><img data-info="3674579-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw2-MyleeFei" id="img3674579" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9782042"></a><a class="title" href="/cubby_view.html?entryid=9782042&amp;saveit=Yes">Large Motor for 07/11/17</a><br><b>"hat!"</b> <a class="info" href="/cubby_view.html?entryid=9782042&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9770969&amp;saveit=Yes" class="preview"><span id="img-wrapper-3673117"><img data-info="3673117-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw25Ny9QeFei" id="img3673117" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9770969"></a><a class="title" href="/cubby_view.html?entryid=9770969&amp;saveit=Yes">07/10/17</a><br><b>fun in the gym!</b> <a class="info" href="/cubby_view.html?entryid=9770969&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9815834&amp;saveit=Yes" class="preview"><span id="img-wrapper-3687383"><img data-info="3687383-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawK9NSZUeFei" id="img3687383" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9815834"></a><a class="title" href="/cubby_view.html?entryid=9815834&amp;saveit=Yes">Art for 07/13/17</a><br><b>easier to use my hand! :)</b> <a class="info" href="/cubby_view.html?entryid=9815834&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9814740&amp;saveit=Yes" class="preview"><span id="img-wrapper-3687022"><img data-info="3687022-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawK9NixVeFei" id="img3687022" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9814740"></a><a class="title" href="/cubby_view.html?entryid=9814740&amp;saveit=Yes">Large Motor for 07/13/17</a><br><b>outside finally!</b> <a class="info" href="/cubby_view.html?entryid=9814740&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9799881&amp;saveit=Yes" class="preview"><span id="img-wrapper-3681138"><img data-info="3681138-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawK7Ny1feFei" id="img3681138" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9799881"></a><a class="title" href="/cubby_view.html?entryid=9799881&amp;saveit=Yes">Art for 07/12/17</a><br><b>chalk coloring</b> <a class="info" href="/cubby_view.html?entryid=9799881&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9782042&amp;saveit=Yes" class="preview"><span id="img-wrapper-3674579"><img data-info="3674579-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw2-MyleeFei" id="img3674579" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9782042"></a><a class="title" href="/cubby_view.html?entryid=9782042&amp;saveit=Yes">Large Motor for 07/11/17</a><br><b>"hat!"</b> <a class="info" href="/cubby_view.html?entryid=9782042&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9770969&amp;saveit=Yes" class="preview"><span id="img-wrapper-3673117"><img data-info="3673117-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw25Ny9QeFei" id="img3673117" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9770969"></a><a class="title" href="/cubby_view.html?entryid=9770969&amp;saveit=Yes">07/10/17</a><br><b>fun in the gym!</b> <a class="info" href="/cubby_view.html?entryid=9770969&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9767131&amp;saveit=Yes" class="preview"><span id="img-wrapper-3669183"><img data-info="3669183-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawyzNyZUeFei" id="img3669183" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9767131"></a><a class="title" href="/cubby_view.html?entryid=9767131&amp;saveit=Yes">Sensory for 07/10/17</a><br><b>playing with the texture board!</b> <a class="info" href="/cubby_view.html?entryid=9767131&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9766743&amp;saveit=Yes" class="preview"><span id="img-wrapper-3669027"><img data-info="3669027-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawyzNixQeFei" id="img3669027" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9766743"></a><a class="title" href="/cubby_view.html?entryid=9766743&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Sensory for 07/10/17</a><br><b></b><br>investigating tape <a class="info" href="/cubby_view.html?entryid=9766743&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9755409&amp;saveit=Yes" class="preview"><span id="img-wrapper-3667882"><img data-info="3667882-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawy9PiZVeFei" id="img3667882" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9755409"></a><a class="title" href="/cubby_view.html?entryid=9755409&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Math, Science, Sensory for 07/07/17</a><br><b></b><br>sensory beans <a class="info" href="/cubby_view.html?entryid=9755409&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9755003&amp;saveit=Yes" class="preview"><span id="img-wrapper-3667178"><img data-info="3667178-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawy9NylfeFei" id="img3667178" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9755003"></a><a class="title" href="/cubby_view.html?entryid=9755003&amp;saveit=Yes">Large Motor, Social / Emotional for 07/07/17</a><br><b>playing ball with Ms. Rose!</b> <a class="info" href="/cubby_view.html?entryid=9755003&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9751499&amp;saveit=Yes" class="preview"><span id="img-wrapper-3663274"><img data-info="3663274-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawy5NClTeFei" id="img3663274" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9751499"></a><a class="title" href="/cubby_view.html?entryid=9751499&amp;saveit=Yes">Large Motor for 07/07/17</a><br><b>fun playing in the tent!</b> <a class="info" href="/cubby_view.html?entryid=9751499&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9737476&amp;saveit=Yes" class="preview"><span id="img-wrapper-3657901"><img data-info="3657901-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-9Py5WeFei" id="img3657901" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9737476"></a><a class="title" href="/cubby_view.html?entryid=9737476&amp;saveit=Yes">Art for 07/06/17</a><br><b>coloring fishies</b> <a class="info" href="/cubby_view.html?entryid=9737476&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9736344&amp;saveit=Yes" class="preview"><span id="img-wrapper-3657462"><img data-info="3657462-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-9MihVeFei" id="img3657462" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9736344"></a><a class="title" href="/cubby_view.html?entryid=9736344&amp;saveit=Yes">Social / Emotional for 07/06/17</a><br><b>awww... sharing with his little friends!</b> <a class="info" href="/cubby_view.html?entryid=9736344&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9736113&amp;saveit=Yes" class="preview"><span id="img-wrapper-3657408"><img data-info="3657408-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-9Mi5feFei" id="img3657408" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9736113"></a><a class="title" href="/cubby_view.html?entryid=9736113&amp;saveit=Yes">Science for 07/06/17</a><br><b>checking out the leaves!</b> <a class="info" href="/cubby_view.html?entryid=9736113&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9735965&amp;saveit=Yes" class="preview"><span id="img-wrapper-3657367"><img data-info="3657367-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-9NShQeFei" id="img3657367" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9735965"></a><a class="title" href="/cubby_view.html?entryid=9735965&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 07/06/17</a><br><b>"ball!"</b> <a class="info" href="/cubby_view.html?entryid=9735965&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9725874&amp;saveit=Yes" class="preview"><span id="img-wrapper-3656177"><img data-info="3656177-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-8NylQeFei" id="img3656177" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9725874"></a><a class="title" href="/cubby_view.html?entryid=9725874&amp;saveit=Yes">Sensory for 07/05/17</a><br><b>Playing water with sponges</b> <a class="info" href="/cubby_view.html?entryid=9725874&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9721726&amp;saveit=Yes" class="preview"><span id="img-wrapper-3652164"><img data-info="3652164-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-4NyhTeFei" id="img3652164" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9721726"></a><a class="title" href="/cubby_view.html?entryid=9721726&amp;saveit=Yes">Art for 07/05/17</a><br><b>watercolor painting</b> <a class="info" href="/cubby_view.html?entryid=9721726&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9721299&amp;saveit=Yes" class="preview"><span id="img-wrapper-3652058"><img data-info="3652058-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw-4NitfeFei" id="img3652058" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9721299"></a><a class="title" href="/cubby_view.html?entryid=9721299&amp;saveit=Yes">Large Motor for 07/05/17</a><br><b>playground fun!</b> <a class="info" href="/cubby_view.html?entryid=9721299&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9698182&amp;saveit=Yes" class="preview"><span id="img-wrapper-3643626"><img data-info="3643626-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw65MCxReFei" id="img3643626" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9698182"></a><a class="title" href="/cubby_view.html?entryid=9698182&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication for 06/30/17</a><br><b></b><br>big big truck! <a class="info" href="/cubby_view.html?entryid=9698182&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9697506&amp;saveit=Yes" class="preview"><span id="img-wrapper-3643421"><img data-info="3643421-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw65MixWeFei" id="img3643421" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9697506"></a><a class="title" href="/cubby_view.html?entryid=9697506&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Science, Social / Emotional for 06/30/17</a><br><b></b><br>investigating an ant <a class="info" href="/cubby_view.html?entryid=9697506&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9687784&amp;saveit=Yes" class="preview"><span id="img-wrapper-3641893"><img data-info="3641893-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaw67PidUeFei" id="img3641893" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9687784"></a><a class="title" href="/cubby_view.html?entryid=9687784&amp;saveit=Yes">Social / Emotional for 06/29/17</a><br><b>A red star!</b> <a class="info" href="/cubby_view.html?entryid=9687784&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9683687&amp;saveit=Yes" class="preview"><span id="img-wrapper-3637635"><img data-info="3637635-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawm9MC1SeFei" id="img3637635" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9683687"></a><a class="title" href="/cubby_view.html?entryid=9683687&amp;saveit=Yes">Art, Fine Motor for 06/29/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9683687&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9683033&amp;saveit=Yes" class="preview"><span id="img-wrapper-3637372"><img data-info="3637372-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawm9NSlVeFei" id="img3637372" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9683033"></a><a class="title" href="/cubby_view.html?entryid=9683033&amp;saveit=Yes">Social / Emotional for 06/29/17</a><br><b>enjoying this beautiful weather!</b> <a class="info" href="/cubby_view.html?entryid=9683033&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9672017&amp;saveit=Yes" class="preview"><span id="img-wrapper-3636379"><img data-info="3636379-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawm8NSleeFei" id="img3636379" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9672017"></a><a class="title" href="/cubby_view.html?entryid=9672017&amp;saveit=Yes">Art for 06/28/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9672017&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9671700&amp;saveit=Yes" class="preview"><span id="img-wrapper-3635953"><img data-info="3635953-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawm_PytUeFei" id="img3635953" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9671700"></a><a class="title" href="/cubby_view.html?entryid=9671700&amp;saveit=Yes">Social / Emotional for 06/28/17</a><br><b>just hanging out...</b> <a class="info" href="/cubby_view.html?entryid=9671700&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9639476&amp;saveit=Yes" class="preview"><span id="img-wrapper-3624437"><img data-info="3624437-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi-Mi1QeFei" id="img3624437" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9639476"></a><a class="title" href="/cubby_view.html?entryid=9639476&amp;saveit=Yes">Large Motor, Social / Emotional for 06/26/17</a><br><b>busy busy busy!</b> <a class="info" href="/cubby_view.html?entryid=9639476&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9639120&amp;saveit=Yes" class="preview"><span id="img-wrapper-3623990"><img data-info="3623990-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi5PydXeFei" id="img3623990" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9639120"></a><a class="title" href="/cubby_view.html?entryid=9639120&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 06/26/17</a><br><b></b><br>writing on our new clipboards <a class="info" href="/cubby_view.html?entryid=9639120&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9635706&amp;saveit=Yes" class="preview"><span id="img-wrapper-3621174"><img data-info="3621174-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi7NylTeFei" id="img3621174" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9635706"></a><a class="title" href="/cubby_view.html?entryid=9635706&amp;saveit=Yes">Art for 06/26/17</a><br><b>painting a picture of our bodies!</b> <a class="info" href="/cubby_view.html?entryid=9635706&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9634678&amp;saveit=Yes" class="preview"><span id="img-wrapper-3620922"><img data-info="3620922-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi6PyxVeFei" id="img3620922" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9634678"></a><a class="title" href="/cubby_view.html?entryid=9634678&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication for 06/26/17</a><br><b></b><br>investigating a stick <a class="info" href="/cubby_view.html?entryid=9634678&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9634581&amp;saveit=Yes" class="preview"><span id="img-wrapper-3620900"><img data-info="3620900-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi6Py5XeFei" id="img3620900" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9634581"></a><a class="title" href="/cubby_view.html?entryid=9634581&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Math for 06/26/17</a><br><b></b><br>found a circle on the equipment and called it ball <a class="info" href="/cubby_view.html?entryid=9634581&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9624226&amp;saveit=Yes" class="preview"><span id="img-wrapper-3619726"><img data-info="3619726-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawuzMSxReFei" id="img3619726" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9624226"></a><a class="title" href="/cubby_view.html?entryid=9624226&amp;saveit=Yes">Large Motor for 06/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9624226&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9639120&amp;saveit=Yes" class="preview"><span id="img-wrapper-3623990"><img data-info="3623990-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi5PydXeFei" id="img3623990" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9639120"></a><a class="title" href="/cubby_view.html?entryid=9639120&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 06/26/17</a><br><b></b><br>writing on our new clipboards <a class="info" href="/cubby_view.html?entryid=9639120&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9635706&amp;saveit=Yes" class="preview"><span id="img-wrapper-3621174"><img data-info="3621174-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi7NylTeFei" id="img3621174" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9635706"></a><a class="title" href="/cubby_view.html?entryid=9635706&amp;saveit=Yes">Art for 06/26/17</a><br><b>painting a picture of our bodies!</b> <a class="info" href="/cubby_view.html?entryid=9635706&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9634678&amp;saveit=Yes" class="preview"><span id="img-wrapper-3620922"><img data-info="3620922-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi6PyxVeFei" id="img3620922" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9634678"></a><a class="title" href="/cubby_view.html?entryid=9634678&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication for 06/26/17</a><br><b></b><br>investigating a stick <a class="info" href="/cubby_view.html?entryid=9634678&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9634581&amp;saveit=Yes" class="preview"><span id="img-wrapper-3620900"><img data-info="3620900-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawi6Py5XeFei" id="img3620900" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9634581"></a><a class="title" href="/cubby_view.html?entryid=9634581&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Math for 06/26/17</a><br><b></b><br>found a circle on the equipment and called it ball <a class="info" href="/cubby_view.html?entryid=9634581&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9624226&amp;saveit=Yes" class="preview"><span id="img-wrapper-3619726"><img data-info="3619726-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawuzMSxReFei" id="img3619726" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9624226"></a><a class="title" href="/cubby_view.html?entryid=9624226&amp;saveit=Yes">Large Motor for 06/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9624226&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9623675&amp;saveit=Yes" class="preview"><span id="img-wrapper-3619033"><img data-info="3619033-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawuzNi1UeFei" id="img3619033" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9623675"></a><a class="title" href="/cubby_view.html?entryid=9623675&amp;saveit=Yes">Fine Motor for 06/23/17</a><br><b>coloring!</b> <a class="info" href="/cubby_view.html?entryid=9623675&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9620678&amp;saveit=Yes" class="preview"><span id="img-wrapper-3615834"><img data-info="3615834-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawu_Pi1TeFei" id="img3615834" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9620678"></a><a class="title" href="/cubby_view.html?entryid=9620678&amp;saveit=Yes">Art, Fine Motor for 06/23/17</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=9620678&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9618850&amp;saveit=Yes" class="preview"><span id="img-wrapper-3615266"><img data-info="3615266-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawu_NChReFei" id="img3615266" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9618850"></a><a class="title" href="/cubby_view.html?entryid=9618850&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 06/23/17</a><br><b></b><br>crawling backwards through the tunnel <a class="info" href="/cubby_view.html?entryid=9618850&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9608959&amp;saveit=Yes" class="preview"><span id="img-wrapper-3613830"><img data-info="3613830-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawu5Pi1XeFei" id="img3613830" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9608959"></a><a class="title" href="/cubby_view.html?entryid=9608959&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 06/22/17</a><br><b></b><br>peek-a-boo <a class="info" href="/cubby_view.html?entryid=9608959&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9608949&amp;saveit=Yes" class="preview"><span id="img-wrapper-3613813"><img data-info="3613813-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawu5Pi9UeFei" id="img3613813" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9608949"></a><a class="title" href="/cubby_view.html?entryid=9608949&amp;saveit=Yes">Large Motor, Social / Emotional for 06/22/17</a><br><b></b><br>taking a break <a class="info" href="/cubby_view.html?entryid=9608949&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9605428&amp;saveit=Yes" class="preview"><span id="img-wrapper-3609718"><img data-info="3609718-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawqzMS9feFei" id="img3609718" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9605428"></a><a class="title" href="/cubby_view.html?entryid=9605428&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Sensory for 06/22/17</a><br><b></b><br>making trees with paper and toilet rolls <a class="info" href="/cubby_view.html?entryid=9605428&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592705&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607925"><img data-info="3607925-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9PyxSeFei" id="img3607925" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592705"></a><a class="title" href="/cubby_view.html?entryid=9592705&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication for 06/21/17</a><br><b></b><br>working on colors too! <a class="info" href="/cubby_view.html?entryid=9592705&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592696&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607916"><img data-info="3607916-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9Py9ReFei" id="img3607916" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592696"></a><a class="title" href="/cubby_view.html?entryid=9592696&amp;saveit=Yes">Art, Fine Motor for 06/21/17</a><br><b></b><br>dot markers chameleon <a class="info" href="/cubby_view.html?entryid=9592696&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592636&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607854"><img data-info="3607854-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9PitTeFei" id="img3607854" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592636"></a><a class="title" href="/cubby_view.html?entryid=9592636&amp;saveit=Yes">Language / Vocal Communication, Large Motor, Social / Emotional for 06/21/17</a><br><b></b><br>peek a boo <a class="info" href="/cubby_view.html?entryid=9592636&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592603&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607802"><img data-info="3607802-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9Pi5VeFei" id="img3607802" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592603"></a><a class="title" href="/cubby_view.html?entryid=9592603&amp;saveit=Yes">Health / Safety / Nutrition, Large Motor for 06/21/17</a><br><b></b><br>going through safely <a class="info" href="/cubby_view.html?entryid=9592603&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9605428&amp;saveit=Yes" class="preview"><span id="img-wrapper-3609718"><img data-info="3609718-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawqzMS9feFei" id="img3609718" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9605428"></a><a class="title" href="/cubby_view.html?entryid=9605428&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Sensory for 06/22/17</a><br><b></b><br>making trees with paper and toilet rolls <a class="info" href="/cubby_view.html?entryid=9605428&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592705&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607925"><img data-info="3607925-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9PyxSeFei" id="img3607925" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592705"></a><a class="title" href="/cubby_view.html?entryid=9592705&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Language / Vocal Communication for 06/21/17</a><br><b></b><br>working on colors too! <a class="info" href="/cubby_view.html?entryid=9592705&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592696&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607916"><img data-info="3607916-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9Py9ReFei" id="img3607916" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592696"></a><a class="title" href="/cubby_view.html?entryid=9592696&amp;saveit=Yes">Art, Fine Motor for 06/21/17</a><br><b></b><br>dot markers chameleon <a class="info" href="/cubby_view.html?entryid=9592696&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592636&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607854"><img data-info="3607854-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9PitTeFei" id="img3607854" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592636"></a><a class="title" href="/cubby_view.html?entryid=9592636&amp;saveit=Yes">Language / Vocal Communication, Large Motor, Social / Emotional for 06/21/17</a><br><b></b><br>peek a boo <a class="info" href="/cubby_view.html?entryid=9592636&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9592603&amp;saveit=Yes" class="preview"><span id="img-wrapper-3607802"><img data-info="3607802-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq9Pi5VeFei" id="img3607802" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9592603"></a><a class="title" href="/cubby_view.html?entryid=9592603&amp;saveit=Yes">Health / Safety / Nutrition, Large Motor for 06/21/17</a><br><b></b><br>going through safely <a class="info" href="/cubby_view.html?entryid=9592603&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9575914&amp;saveit=Yes" class="preview"><span id="img-wrapper-3600890"><img data-info="3600890-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq6PidXeFei" id="img3600890" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9575914"></a><a class="title" href="/cubby_view.html?entryid=9575914&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 06/20/17</a><br><b></b><br>I asked what did he find and he brought it to me and told me all about it <a class="info" href="/cubby_view.html?entryid=9575914&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9575849&amp;saveit=Yes" class="preview"><span id="img-wrapper-3600783"><img data-info="3600783-90-0" src="https://www.lifecubby.me/i/rmrmJYwEawq6MSZUeFei" id="img3600783" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9575849"></a><a class="title" href="/cubby_view.html?entryid=9575849&amp;saveit=Yes">Large Motor, Social / Emotional for 06/20/17</a><br><b></b><br>two best friends <a class="info" href="/cubby_view.html?entryid=9575849&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9572922&amp;saveit=Yes" class="preview"><span id="img-wrapper-3597030"><img data-info="3597030-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO9Ni1XeFei" id="img3597030" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9572922"></a><a class="title" href="/cubby_view.html?entryid=9572922&amp;saveit=Yes">06/20/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9572922&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9571664&amp;saveit=Yes" class="preview"><span id="img-wrapper-3596288"><img data-info="3596288-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO8NCZfeFei" id="img3596288" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9571664"></a><a class="title" href="/cubby_view.html?entryid=9571664&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition, Social / Emotional for 06/20/17</a><br><b></b><br>he ran away. I asked him to come splash and he shook his head <a class="info" href="/cubby_view.html?entryid=9571664&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9559235&amp;saveit=Yes" class="preview"><span id="img-wrapper-3594371"><img data-info="3594371-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO-NSlWeFei" id="img3594371" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9559235"></a><a class="title" href="/cubby_view.html?entryid=9559235&amp;saveit=Yes">Social / Emotional for 06/19/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=9559235&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9555699&amp;saveit=Yes" class="preview"><span id="img-wrapper-3590852"><img data-info="3590852-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO6PitVeFei" id="img3590852" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9555699"></a><a class="title" href="/cubby_view.html?entryid=9555699&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor, Social / Emotional for 06/19/17</a><br><b></b><br>wiggle wiggle <a class="info" href="/cubby_view.html?entryid=9555699&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9554934&amp;saveit=Yes" class="preview"><span id="img-wrapper-3590470"><img data-info="3590470-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO6MilXeFei" id="img3590470" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9554934"></a><a class="title" href="/cubby_view.html?entryid=9554934&amp;saveit=Yes">Art, Fine Motor, Science for 06/19/17</a><br><b></b><br>qtip snakes <a class="info" href="/cubby_view.html?entryid=9554934&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9554740&amp;saveit=Yes" class="preview"><span id="img-wrapper-3590413"><img data-info="3590413-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO6Mi9UeFei" id="img3590413" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9554740"></a><a class="title" href="/cubby_view.html?entryid=9554740&amp;saveit=Yes">Art, Fine Motor, Science for 06/19/17</a><br><b></b><br>painting snakes with qtips <a class="info" href="/cubby_view.html?entryid=9554740&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9553908&amp;saveit=Yes" class="preview"><span id="img-wrapper-3590288"><img data-info="3590288-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO6NCZfeFei" id="img3590288" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9553908"></a><a class="title" href="/cubby_view.html?entryid=9553908&amp;saveit=Yes">Large Motor, Social / Emotional for 06/19/17</a><br><b></b><br>peek! <a class="info" href="/cubby_view.html?entryid=9553908&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9550513&amp;saveit=Yes" class="preview"><span id="img-wrapper-3590047"><img data-info="3590047-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAO6NipQeFei" id="img3590047" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9550513"></a><a class="title" href="/cubby_view.html?entryid=9550513&amp;saveit=Yes">Art, Fine Motor, Sensory for 06/19/17</a><br><b></b><br>sponge painting <a class="info" href="/cubby_view.html?entryid=9550513&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9537875&amp;saveit=Yes" class="preview"><span id="img-wrapper-3584539"><img data-info="3584539-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAK-My1eeFei" id="img3584539" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9537875"></a><a class="title" href="/cubby_view.html?entryid=9537875&amp;saveit=Yes">Language / Vocal Communication for 06/16/17</a><br><b></b><br>said up now he's climbing <a class="info" href="/cubby_view.html?entryid=9537875&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9524049&amp;saveit=Yes" class="preview"><span id="img-wrapper-3579620"><img data-info="3579620-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA2zMCxXeFei" id="img3579620" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9524049"></a><a class="title" href="/cubby_view.html?entryid=9524049&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor for 06/15/17</a><br><b></b><br>we all helped shred up paper for our new suncatchers <a class="info" href="/cubby_view.html?entryid=9524049&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9523026&amp;saveit=Yes" class="preview"><span id="img-wrapper-3579325"><img data-info="3579325-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA2zNSxSeFei" id="img3579325" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9523026"></a><a class="title" href="/cubby_view.html?entryid=9523026&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 06/15/17</a><br><b></b><br>have to climb the new things! <a class="info" href="/cubby_view.html?entryid=9523026&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9522761&amp;saveit=Yes" class="preview"><span id="img-wrapper-3579279"><img data-info="3579279-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA2zNCleeFei" id="img3579279" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9522761"></a><a class="title" href="/cubby_view.html?entryid=9522761&amp;saveit=Yes">Music for 06/15/17</a><br><b></b><br>music instruments outside <a class="info" href="/cubby_view.html?entryid=9522761&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507792&amp;saveit=Yes" class="preview"><span id="img-wrapper-3574055"><img data-info="3574055-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA2-NitSeFei" id="img3574055" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507792"></a><a class="title" href="/cubby_view.html?entryid=9507792&amp;saveit=Yes">Approaches to Learning / Cognitive, Science, Sensory for 06/14/17</a><br><b></b><br>of course we found dirt! <a class="info" href="/cubby_view.html?entryid=9507792&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507767&amp;saveit=Yes" class="preview"><span id="img-wrapper-3574028"><img data-info="3574028-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA2-NixfeFei" id="img3574028" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507767"></a><a class="title" href="/cubby_view.html?entryid=9507767&amp;saveit=Yes">Language / Vocal Communication, Large Motor, Social / Emotional for 06/14/17</a><br><b></b><br>on the lion! <a class="info" href="/cubby_view.html?entryid=9507767&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507588&amp;saveit=Yes" class="preview"><span id="img-wrapper-3573904"><img data-info="3573904-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA25Py5TeFei" id="img3573904" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507588"></a><a class="title" href="/cubby_view.html?entryid=9507588&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Science for 06/14/17</a><br><b></b><br>talking about the garden <a class="info" href="/cubby_view.html?entryid=9507588&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507510&amp;saveit=Yes" class="preview"><span id="img-wrapper-3573849"><img data-info="3573849-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA25PipeeFei" id="img3573849" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507510"></a><a class="title" href="/cubby_view.html?entryid=9507510&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 06/14/17</a><br><b></b><br>let us in <a class="info" href="/cubby_view.html?entryid=9507510&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507452&amp;saveit=Yes" class="preview"><span id="img-wrapper-3573813"><img data-info="3573813-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA25Pi9UeFei" id="img3573813" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507452"></a><a class="title" href="/cubby_view.html?entryid=9507452&amp;saveit=Yes">Approaches to Learning / Cognitive, Science, Sensory for 06/14/17</a><br><b></b><br>investigating the tree <a class="info" href="/cubby_view.html?entryid=9507452&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507367&amp;saveit=Yes" class="preview"><span id="img-wrapper-3573773"><img data-info="3573773-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA25MSlUeFei" id="img3573773" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507367"></a><a class="title" href="/cubby_view.html?entryid=9507367&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Science, Sensory for 06/14/17</a><br><b></b><br>investigating the tree <a class="info" href="/cubby_view.html?entryid=9507367&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9507074&amp;saveit=Yes" class="preview"><span id="img-wrapper-3573663"><img data-info="3573663-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA25MChUeFei" id="img3573663" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9507074"></a><a class="title" href="/cubby_view.html?entryid=9507074&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 06/14/17</a><br><b></b><br>we're stuck! haha <a class="info" href="/cubby_view.html?entryid=9507074&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9491812&amp;saveit=Yes" class="preview"><span id="img-wrapper-3568800"><img data-info="3568800-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAyyPi5XeFei" id="img3568800" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9491812"></a><a class="title" href="/cubby_view.html?entryid=9491812&amp;saveit=Yes">Approaches to Learning / Cognitive, Math, Social / Emotional for 06/13/17</a><br><b></b><br>learning how to sort colors <a class="info" href="/cubby_view.html?entryid=9491812&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9491735&amp;saveit=Yes" class="preview"><span id="img-wrapper-3568738"><img data-info="3568738-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAyyMS1feFei" id="img3568738" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9491735"></a><a class="title" href="/cubby_view.html?entryid=9491735&amp;saveit=Yes">Approaches to Learning / Cognitive, Math, Social / Emotional for 06/13/17</a><br><b></b><br>learning how to sort colors <a class="info" href="/cubby_view.html?entryid=9491735&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9490090&amp;saveit=Yes" class="preview"><span id="img-wrapper-3567911"><img data-info="3567911-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAy9Py9WeFei" id="img3567911" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9490090"></a><a class="title" href="/cubby_view.html?entryid=9490090&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition, Large Motor, Sensory for 06/13/17</a><br><b></b><br>climbed through the water <a class="info" href="/cubby_view.html?entryid=9490090&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9456137&amp;saveit=Yes" class="preview"><span id="img-wrapper-3556709"><img data-info="3556709-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA-8MS5eeFei" id="img3556709" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9456137"></a><a class="title" href="/cubby_view.html?entryid=9456137&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Large Motor for 06/09/17</a><br><b></b><br>he tips over bikes and says uh oh and then fixes the wheel <a class="info" href="/cubby_view.html?entryid=9456137&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9440756&amp;saveit=Yes" class="preview"><span id="img-wrapper-3550805"><img data-info="3550805-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA-6Pi5SeFei" id="img3550805" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9440756"></a><a class="title" href="/cubby_view.html?entryid=9440756&amp;saveit=Yes">Math for 06/08/17</a><br><b>how far does the car roll?</b> <a class="info" href="/cubby_view.html?entryid=9440756&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9440179&amp;saveit=Yes" class="preview"><span id="img-wrapper-3550698"><img data-info="3550698-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA-6MCdfeFei" id="img3550698" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9440179"></a><a class="title" href="/cubby_view.html?entryid=9440179&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication for 06/08/17</a><br><b></b><br>what's that? <a class="info" href="/cubby_view.html?entryid=9440179&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9439126&amp;saveit=Yes" class="preview"><span id="img-wrapper-3550565"><img data-info="3550565-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA-6MyhSeFei" id="img3550565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9439126"></a><a class="title" href="/cubby_view.html?entryid=9439126&amp;saveit=Yes">Health / Safety / Nutrition for 06/08/17</a><br><b></b><br>Feeling better <a class="info" href="/cubby_view.html?entryid=9439126&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9424215&amp;saveit=Yes" class="preview"><span id="img-wrapper-3545234"><img data-info="3545234-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA6_NC1TeFei" id="img3545234" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9424215"></a><a class="title" href="/cubby_view.html?entryid=9424215&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 06/07/17</a><br><b></b><br>pouring tea <a class="info" href="/cubby_view.html?entryid=9424215&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9424109&amp;saveit=Yes" class="preview"><span id="img-wrapper-3545190"><img data-info="3545190-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaA6_NydXeFei" id="img3545190" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9424109"></a><a class="title" href="/cubby_view.html?entryid=9424109&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Social / Emotional for 06/07/17</a><br><b></b><br>putting the ball in the basket. why not it is a Dramatic picnic <a class="info" href="/cubby_view.html?entryid=9424109&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9406631&amp;saveit=Yes" class="preview"><span id="img-wrapper-3539489"><img data-info="3539489-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAmzMiZeeFei" id="img3539489" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9406631"></a><a class="title" href="/cubby_view.html?entryid=9406631&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 06/06/17</a><br><b></b><br>it's a tight squeeze but we'll make it <a class="info" href="/cubby_view.html?entryid=9406631&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9406500&amp;saveit=Yes" class="preview"><span id="img-wrapper-3539430"><img data-info="3539430-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAmzMi1XeFei" id="img3539430" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9406500"></a><a class="title" href="/cubby_view.html?entryid=9406500&amp;saveit=Yes">Social / Emotional for 06/06/17</a><br><b></b><br>was playing chase, stopped and gave a smile <a class="info" href="/cubby_view.html?entryid=9406500&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9377040&amp;saveit=Yes" class="preview"><span id="img-wrapper-3531837"><img data-info="3531837-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAm7Pi1QeFei" id="img3531837" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9377040"></a><a class="title" href="/cubby_view.html?entryid=9377040&amp;saveit=Yes">Language / Vocal Communication, Print Literacy Development for 06/02/17</a><br><b></b><br>reading books <a class="info" href="/cubby_view.html?entryid=9377040&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9361258&amp;saveit=Yes" class="preview"><span id="img-wrapper-3527170"><img data-info="3527170-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi9NylXeFei" id="img3527170" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9361258"></a><a class="title" href="/cubby_view.html?entryid=9361258&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Science, Sensory for 06/01/17</a><br><b></b><br>transferring water to the other bucket <a class="info" href="/cubby_view.html?entryid=9361258&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9357659&amp;saveit=Yes" class="preview"><span id="img-wrapper-3523636"><img data-info="3523636-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi5MC1ReFei" id="img3523636" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9357659"></a><a class="title" href="/cubby_view.html?entryid=9357659&amp;saveit=Yes">06/01/17</a><br><b>loving the book!</b> <a class="info" href="/cubby_view.html?entryid=9357659&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9406631&amp;saveit=Yes" class="preview"><span id="img-wrapper-3539489"><img data-info="3539489-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAmzMiZeeFei" id="img3539489" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9406631"></a><a class="title" href="/cubby_view.html?entryid=9406631&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 06/06/17</a><br><b></b><br>it's a tight squeeze but we'll make it <a class="info" href="/cubby_view.html?entryid=9406631&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9406500&amp;saveit=Yes" class="preview"><span id="img-wrapper-3539430"><img data-info="3539430-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAmzMi1XeFei" id="img3539430" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9406500"></a><a class="title" href="/cubby_view.html?entryid=9406500&amp;saveit=Yes">Social / Emotional for 06/06/17</a><br><b></b><br>was playing chase, stopped and gave a smile <a class="info" href="/cubby_view.html?entryid=9406500&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9377040&amp;saveit=Yes" class="preview"><span id="img-wrapper-3531837"><img data-info="3531837-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAm7Pi1QeFei" id="img3531837" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9377040"></a><a class="title" href="/cubby_view.html?entryid=9377040&amp;saveit=Yes">Language / Vocal Communication, Print Literacy Development for 06/02/17</a><br><b></b><br>reading books <a class="info" href="/cubby_view.html?entryid=9377040&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9361258&amp;saveit=Yes" class="preview"><span id="img-wrapper-3527170"><img data-info="3527170-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi9NylXeFei" id="img3527170" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9361258"></a><a class="title" href="/cubby_view.html?entryid=9361258&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Science, Sensory for 06/01/17</a><br><b></b><br>transferring water to the other bucket <a class="info" href="/cubby_view.html?entryid=9361258&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9357659&amp;saveit=Yes" class="preview"><span id="img-wrapper-3523636"><img data-info="3523636-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi5MC1ReFei" id="img3523636" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9357659"></a><a class="title" href="/cubby_view.html?entryid=9357659&amp;saveit=Yes">06/01/17</a><br><b>loving the book!</b> <a class="info" href="/cubby_view.html?entryid=9357659&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9343698&amp;saveit=Yes" class="preview"><span id="img-wrapper-3521241"><img data-info="3521241-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi7NCpWeFei" id="img3521241" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9343698"></a><a class="title" href="/cubby_view.html?entryid=9343698&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional, Sensory for 05/31/17</a><br><b></b><br>blowing bubbles <a class="info" href="/cubby_view.html?entryid=9343698&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9343689&amp;saveit=Yes" class="preview"><span id="img-wrapper-3521227"><img data-info="3521227-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi7NCxQeFei" id="img3521227" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9343689"></a><a class="title" href="/cubby_view.html?entryid=9343689&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional, Sensory for 05/31/17</a><br><b></b><br>blowing bubbles <a class="info" href="/cubby_view.html?entryid=9343689&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9343673&amp;saveit=Yes" class="preview"><span id="img-wrapper-3521204"><img data-info="3521204-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAi7NC5TeFei" id="img3521204" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9343673"></a><a class="title" href="/cubby_view.html?entryid=9343673&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 05/31/17</a><br><b></b><br>learning how to make bubbles <a class="info" href="/cubby_view.html?entryid=9343673&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9321030&amp;saveit=Yes" class="preview"><span id="img-wrapper-3512139"><img data-info="3512139-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAu4Ny1eeFei" id="img3512139" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9321030"></a><a class="title" href="/cubby_view.html?entryid=9321030&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor, Social / Emotional for 05/30/17</a><br><b></b><br>turtle race <a class="info" href="/cubby_view.html?entryid=9321030&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9320811&amp;saveit=Yes" class="preview"><span id="img-wrapper-3512112"><img data-info="3512112-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAu4Ny9VeFei" id="img3512112" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9320811"></a><a class="title" href="/cubby_view.html?entryid=9320811&amp;saveit=Yes">Approaches to Learning / Cognitive for 05/30/17</a><br><b></b><br>trying to figure out the fountain <a class="info" href="/cubby_view.html?entryid=9320811&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9320205&amp;saveit=Yes" class="preview"><span id="img-wrapper-3512043"><img data-info="3512043-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAu4NipUeFei" id="img3512043" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9320205"></a><a class="title" href="/cubby_view.html?entryid=9320205&amp;saveit=Yes">Language / Vocal Communication, Large Motor for 05/30/17</a><br><b></b><br>I said push push and he said go! <a class="info" href="/cubby_view.html?entryid=9320205&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9286846&amp;saveit=Yes" class="preview"><span id="img-wrapper-3501521"><img data-info="3501521-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAq7MyxWeFei" id="img3501521" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9286846"></a><a class="title" href="/cubby_view.html?entryid=9286846&amp;saveit=Yes">Large Motor, Social / Emotional for 05/25/17</a><br><b></b><br>it's become a race <a class="info" href="/cubby_view.html?entryid=9286846&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9286797&amp;saveit=Yes" class="preview"><span id="img-wrapper-3501517"><img data-info="3501517-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAq7My9QeFei" id="img3501517" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9286797"></a><a class="title" href="/cubby_view.html?entryid=9286797&amp;saveit=Yes">Language / Vocal Communication, Large Motor for 05/25/17</a><br><b></b><br>go go go <a class="info" href="/cubby_view.html?entryid=9286797&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9286670&amp;saveit=Yes" class="preview"><span id="img-wrapper-3501488"><img data-info="3501488-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaAq7MiZfeFei" id="img3501488" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9286670"></a><a class="title" href="/cubby_view.html?entryid=9286670&amp;saveit=Yes">Language / Vocal Communication, Large Motor for 05/25/17</a><br><b></b><br>ready? run fast! <a class="info" href="/cubby_view.html?entryid=9286670&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9273806&amp;saveit=Yes" class="preview"><span id="img-wrapper-3499909"><img data-info="3499909-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQOzPy5eeFei" id="img3499909" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9273806"></a><a class="title" href="/cubby_view.html?entryid=9273806&amp;saveit=Yes">Art, Fine Motor, Sensory for 05/24/17</a><br><b></b><br>painting <a class="info" href="/cubby_view.html?entryid=9273806&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9273737&amp;saveit=Yes" class="preview"><span id="img-wrapper-3499837"><img data-info="3499837-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQOzPi1QeFei" id="img3499837" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9273737"></a><a class="title" href="/cubby_view.html?entryid=9273737&amp;saveit=Yes">Large Motor for 05/24/17</a><br><b></b><br>sitting on the trucks <a class="info" href="/cubby_view.html?entryid=9273737&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9273726&amp;saveit=Yes" class="preview"><span id="img-wrapper-3499827"><img data-info="3499827-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQOzPixQeFei" id="img3499827" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9273726"></a><a class="title" href="/cubby_view.html?entryid=9273726&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Music, Social / Emotional for 05/24/17</a><br><b></b><br>making a band <a class="info" href="/cubby_view.html?entryid=9273726&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9273706&amp;saveit=Yes" class="preview"><span id="img-wrapper-3499821"><img data-info="3499821-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQOzPixWeFei" id="img3499821" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9273706"></a><a class="title" href="/cubby_view.html?entryid=9273706&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Language / Vocal Communication, Music, Social / Emotional for 05/24/17</a><br><b></b><br>made a band <a class="info" href="/cubby_view.html?entryid=9273706&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9270593&amp;saveit=Yes" class="preview"><span id="img-wrapper-3496754"><img data-info="3496754-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQO8MStTeFei" id="img3496754" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9270593"></a><a class="title" href="/cubby_view.html?entryid=9270593&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor, Social / Emotional for 05/24/17</a><br><b></b><br>putting up the last chair <a class="info" href="/cubby_view.html?entryid=9270593&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9270538&amp;saveit=Yes" class="preview"><span id="img-wrapper-3496731"><img data-info="3496731-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQO8MS1WeFei" id="img3496731" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9270538"></a><a class="title" href="/cubby_view.html?entryid=9270538&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor, Social / Emotional for 05/24/17</a><br><b></b><br>my helpers stacking chairs <a class="info" href="/cubby_view.html?entryid=9270538&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9270500&amp;saveit=Yes" class="preview"><span id="img-wrapper-3496713"><img data-info="3496713-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQO8MS9UeFei" id="img3496713" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9270500"></a><a class="title" href="/cubby_view.html?entryid=9270500&amp;saveit=Yes">Dramatic Play, Large Motor, Social / Emotional for 05/24/17</a><br><b></b><br>Playing with Leona in the ball pit <a class="info" href="/cubby_view.html?entryid=9270500&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9255828&amp;saveit=Yes" class="preview"><span id="img-wrapper-3494991"><img data-info="3494991-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQO-PydWeFei" id="img3494991" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9255828"></a><a class="title" href="/cubby_view.html?entryid=9255828&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Sensory for 05/23/17</a><br><b></b><br>ripping up paper <a class="info" href="/cubby_view.html?entryid=9255828&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9255664&amp;saveit=Yes" class="preview"><span id="img-wrapper-3494843"><img data-info="3494843-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQO-PipUeFei" id="img3494843" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9255664"></a><a class="title" href="/cubby_view.html?entryid=9255664&amp;saveit=Yes">Social / Emotional for 05/23/17</a><br><b></b><br>so proud <a class="info" href="/cubby_view.html?entryid=9255664&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9255643&amp;saveit=Yes" class="preview"><span id="img-wrapper-3494825"><img data-info="3494825-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQO-PixSeFei" id="img3494825" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9255643"></a><a class="title" href="/cubby_view.html?entryid=9255643&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 05/23/17</a><br><b></b><br>learning Josies name <a class="info" href="/cubby_view.html?entryid=9255643&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9232887&amp;saveit=Yes" class="preview"><span id="img-wrapper-3485768"><img data-info="3485768-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQK_MShfeFei" id="img3485768" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9232887"></a><a class="title" href="/cubby_view.html?entryid=9232887&amp;saveit=Yes">Art, Fine Motor for 05/22/17</a><br><b>free painting</b> <a class="info" href="/cubby_view.html?entryid=9232887&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9218571&amp;saveit=Yes" class="preview"><span id="img-wrapper-3484247"><img data-info="3484247-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQK-NCpQeFei" id="img3484247" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9218571"></a><a class="title" href="/cubby_view.html?entryid=9218571&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Social / Emotional for 05/19/17</a><br><b></b><br>watching how to put on shoes <a class="info" href="/cubby_view.html?entryid=9218571&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9214755&amp;saveit=Yes" class="preview"><span id="img-wrapper-3480516"><img data-info="3480516-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQK6My9ReFei" id="img3480516" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9214755"></a><a class="title" href="/cubby_view.html?entryid=9214755&amp;saveit=Yes">Fine Motor, Language / Vocal Communication, Print Literacy Development for 05/19/17</a><br><b></b><br>prewriting <a class="info" href="/cubby_view.html?entryid=9214755&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9196651&amp;saveit=Yes" class="preview"><span id="img-wrapper-3474815"><img data-info="3474815-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ2-Pi9SeFei" id="img3474815" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9196651"></a><a class="title" href="/cubby_view.html?entryid=9196651&amp;saveit=Yes">Art, Fine Motor for 05/18/17</a><br><b>dot markers ladybugs</b> <a class="info" href="/cubby_view.html?entryid=9196651&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9180219&amp;saveit=Yes" class="preview"><span id="img-wrapper-3470165"><img data-info="3470165-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ26NyhSeFei" id="img3470165" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9180219"></a><a class="title" href="/cubby_view.html?entryid=9180219&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Language / Vocal Communication, Science, Sensory for 05/17/17</a><br><b></b><br>investigating grass <a class="info" href="/cubby_view.html?entryid=9180219&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9179978&amp;saveit=Yes" class="preview"><span id="img-wrapper-3470029"><img data-info="3470029-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ26NixeeFei" id="img3470029" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9179978"></a><a class="title" href="/cubby_view.html?entryid=9179978&amp;saveit=Yes">Art, Fine Motor, Sensory for 05/17/17</a><br><b></b><br>painting feathers <a class="info" href="/cubby_view.html?entryid=9179978&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9160658&amp;saveit=Yes" class="preview"><span id="img-wrapper-3463999"><img data-info="3463999-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQy5PydeeFei" id="img3463999" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9160658"></a><a class="title" href="/cubby_view.html?entryid=9160658&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 05/16/17</a><br><b></b><br>pushing the big bucket <a class="info" href="/cubby_view.html?entryid=9160658&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9160586&amp;saveit=Yes" class="preview"><span id="img-wrapper-3463963"><img data-info="3463963-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQy5PyhUeFei" id="img3463963" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9160586"></a><a class="title" href="/cubby_view.html?entryid=9160586&amp;saveit=Yes">Dramatic Play, Language / Vocal Communication, Social / Emotional for 05/16/17</a><br><b></b><br>look at these two. they have some unspoken rule, but they are trading toys <a class="info" href="/cubby_view.html?entryid=9160586&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9159569&amp;saveit=Yes" class="preview"><span id="img-wrapper-3463520"><img data-info="3463520-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQy5MyxXeFei" id="img3463520" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9159569"></a><a class="title" href="/cubby_view.html?entryid=9159569&amp;saveit=Yes">Art, Language / Vocal Communication for 05/16/17</a><br><b></b><br>making bumblebees <a class="info" href="/cubby_view.html?entryid=9159569&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9109285&amp;saveit=Yes" class="preview"><span id="img-wrapper-3451214"><img data-info="3451214-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ-7NC9TeFei" id="img3451214" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9109285"></a><a class="title" href="/cubby_view.html?entryid=9109285&amp;saveit=Yes">Language / Vocal Communication for 05/11/17</a><br><b></b><br>telling me all about the truck <a class="info" href="/cubby_view.html?entryid=9109285&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9109174&amp;saveit=Yes" class="preview"><span id="img-wrapper-3451082"><img data-info="3451082-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ-7NiZVeFei" id="img3451082" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9109174"></a><a class="title" href="/cubby_view.html?entryid=9109174&amp;saveit=Yes">Social / Emotional for 05/11/17</a><br><b></b><br>hanging out with friends <a class="info" href="/cubby_view.html?entryid=9109174&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9086949&amp;saveit=Yes" class="preview"><span id="img-wrapper-3442946"><img data-info="3442946-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ64PypReFei" id="img3442946" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9086949"></a><a class="title" href="/cubby_view.html?entryid=9086949&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Science, Sensory for 05/10/17</a><br><b></b><br>watching and observing the rain <a class="info" href="/cubby_view.html?entryid=9086949&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9085377&amp;saveit=Yes" class="preview"><span id="img-wrapper-3442423"><img data-info="3442423-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQ64MixUeFei" id="img3442423" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9085377"></a><a class="title" href="/cubby_view.html?entryid=9085377&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor for 05/10/17</a><br><b></b><br>made part of the octopus <a class="info" href="/cubby_view.html?entryid=9085377&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9047766&amp;saveit=Yes" class="preview"><span id="img-wrapper-3432699"><img data-info="3432699-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQm4MCdeeFei" id="img3432699" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9047766"></a><a class="title" href="/cubby_view.html?entryid=9047766&amp;saveit=Yes">05/08/17</a><br><b>painting fish with celery</b> <a class="info" href="/cubby_view.html?entryid=9047766&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9029162&amp;saveit=Yes" class="preview"><span id="img-wrapper-3427073"><img data-info="3427073-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi9NilUeFei" id="img3427073" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9029162"></a><a class="title" href="/cubby_view.html?entryid=9029162&amp;saveit=Yes">Dramatic Play for 05/05/17</a><br><b></b><br>yum yum <a class="info" href="/cubby_view.html?entryid=9029162&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9029145&amp;saveit=Yes" class="preview"><span id="img-wrapper-3427067"><img data-info="3427067-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi9NihQeFei" id="img3427067" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9029145"></a><a class="title" href="/cubby_view.html?entryid=9029145&amp;saveit=Yes">Dramatic Play, Social / Emotional for 05/05/17</a><br><b></b><br>setting the table <a class="info" href="/cubby_view.html?entryid=9029145&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9028818&amp;saveit=Yes" class="preview"><span id="img-wrapper-3426943"><img data-info="3426943-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi8PypUeFei" id="img3426943" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9028818"></a><a class="title" href="/cubby_view.html?entryid=9028818&amp;saveit=Yes">Large Motor for 05/05/17</a><br><b></b><br>cruising on the trike <a class="info" href="/cubby_view.html?entryid=9028818&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9028451&amp;saveit=Yes" class="preview"><span id="img-wrapper-3426803"><img data-info="3426803-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi8Pi5UeFei" id="img3426803" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9028451"></a><a class="title" href="/cubby_view.html?entryid=9028451&amp;saveit=Yes">Language / Vocal Communication, Social / Emotional for 05/05/17</a><br><b></b><br>I asked for a high five and he laughed at me <a class="info" href="/cubby_view.html?entryid=9028451&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9012628&amp;saveit=Yes" class="preview"><span id="img-wrapper-3422053"><img data-info="3422053-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi4NitUeFei" id="img3422053" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9012628"></a><a class="title" href="/cubby_view.html?entryid=9012628&amp;saveit=Yes">Music, Social / Emotional for 05/04/17</a><br><b></b><br>if your happy and you know it your face will show it <a class="info" href="/cubby_view.html?entryid=9012628&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9011498&amp;saveit=Yes" class="preview"><span id="img-wrapper-3421561"><img data-info="3421561-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi7MyhWeFei" id="img3421561" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9011498"></a><a class="title" href="/cubby_view.html?entryid=9011498&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Music for 05/04/17</a><br><b>our friends are loving circle time!</b> <a class="info" href="/cubby_view.html?entryid=9011498&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9010188&amp;saveit=Yes" class="preview"><span id="img-wrapper-3420985"><img data-info="3420985-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi6PyZSeFei" id="img3420985" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9010188"></a><a class="title" href="/cubby_view.html?entryid=9010188&amp;saveit=Yes">Approaches to Learning / Cognitive, Dramatic Play, Math, Science for 05/04/17</a><br><b></b><br>learning how to make a tower out of food <a class="info" href="/cubby_view.html?entryid=9010188&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=9009888&amp;saveit=Yes" class="preview"><span id="img-wrapper-3420908"><img data-info="3420908-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQi6Py5feFei" id="img3420908" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="9009888"></a><a class="title" href="/cubby_view.html?entryid=9009888&amp;saveit=Yes">Fine Motor for 05/04/17</a><br><b>practicing writing skills</b> <a class="info" href="/cubby_view.html?entryid=9009888&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8996273&amp;saveit=Yes" class="preview"><span id="img-wrapper-3419391"><img data-info="3419391-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQuzNSdWeFei" id="img3419391" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8996273"></a><a class="title" href="/cubby_view.html?entryid=8996273&amp;saveit=Yes">Dramatic Play, Language / Vocal Communication, Large Motor for 05/03/17</a><br><b></b><br>ready set go! <a class="info" href="/cubby_view.html?entryid=8996273&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8991041&amp;saveit=Yes" class="preview"><span id="img-wrapper-3415213"><img data-info="3415213-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQu_NC9UeFei" id="img3415213" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8991041"></a><a class="title" href="/cubby_view.html?entryid=8991041&amp;saveit=Yes">Approaches to Learning / Cognitive, Art, Fine Motor, Science, Sensory for 05/03/17</a><br><b></b><br>painting with flowers <a class="info" href="/cubby_view.html?entryid=8991041&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8971357&amp;saveit=Yes" class="preview"><span id="img-wrapper-3409148"><img data-info="3409148-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQqzNypfeFei" id="img3409148" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8971357"></a><a class="title" href="/cubby_view.html?entryid=8971357&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Science, Sensory for 05/02/17</a><br><b></b><br>investigating flowers! <a class="info" href="/cubby_view.html?entryid=8971357&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8971291&amp;saveit=Yes" class="preview"><span id="img-wrapper-3409111"><img data-info="3409111-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQqzNy9WeFei" id="img3409111" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8971291"></a><a class="title" href="/cubby_view.html?entryid=8971291&amp;saveit=Yes">Approaches to Learning / Cognitive, Math, Science, Social / Emotional for 05/02/17</a><br><b></b><br>built it all by himself <a class="info" href="/cubby_view.html?entryid=8971291&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8970374&amp;saveit=Yes" class="preview"><span id="img-wrapper-3408855"><img data-info="3408855-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQqyPitSeFei" id="img3408855" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8970374"></a><a class="title" href="/cubby_view.html?entryid=8970374&amp;saveit=Yes">Language / Vocal Communication, Large Motor for 05/02/17</a><br><b></b><br>he says bye bye! <a class="info" href="/cubby_view.html?entryid=8970374&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8957225&amp;saveit=Yes" class="preview"><span id="img-wrapper-3407181"><img data-info="3407181-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQq9NyZWeFei" id="img3407181" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8957225"></a><a class="title" href="/cubby_view.html?entryid=8957225&amp;saveit=Yes">Social / Emotional for 05/01/17</a><br><b>hiding from me</b> <a class="info" href="/cubby_view.html?entryid=8957225&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8952886&amp;saveit=Yes" class="preview"><span id="img-wrapper-3403426"><img data-info="3403426-90-0" src="https://www.lifecubby.me/i/rmrmJYwEaQq5MixReFei" id="img3403426" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8952886"></a><a class="title" href="/cubby_view.html?entryid=8952886&amp;saveit=Yes">Fine Motor for 05/01/17</a><br><b>water color painting!</b> <a class="info" href="/cubby_view.html?entryid=8952886&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8935868&amp;saveit=Yes" class="preview"><span id="img-wrapper-3398555"><img data-info="3398555-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgOyMytSeFei" id="img3398555" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8935868"></a><a class="title" href="/cubby_view.html?entryid=8935868&amp;saveit=Yes">04/28/17</a><br><b>incident report</b> <a class="info" href="/cubby_view.html?entryid=8935868&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8934161&amp;saveit=Yes" class="preview"><span id="img-wrapper-3397643"><img data-info="3397643-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgO9MCpUeFei" id="img3397643" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8934161"></a><a class="title" href="/cubby_view.html?entryid=8934161&amp;saveit=Yes">Fine Motor for 04/28/17</a><br><b>Sebastian loves painting!</b> <a class="info" href="/cubby_view.html?entryid=8934161&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8919972&amp;saveit=Yes" class="preview"><span id="img-wrapper-3394964"><img data-info="3394964-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgO-PyhTeFei" id="img3394964" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8919972"></a><a class="title" href="/cubby_view.html?entryid=8919972&amp;saveit=Yes">Print Literacy Development for 04/27/17</a><br><b>reading books while our friends sleep</b> <a class="info" href="/cubby_view.html?entryid=8919972&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8916428&amp;saveit=Yes" class="preview"><span id="img-wrapper-3391856"><img data-info="3391856-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgO7PitReFei" id="img3391856" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8916428"></a><a class="title" href="/cubby_view.html?entryid=8916428&amp;saveit=Yes">Approaches to Learning / Cognitive for 04/27/17</a><br><b>having our friends choose between pretzels Teddy grahams and fruit loops. Sebastian chose Teddy grahams</b> <a class="info" href="/cubby_view.html?entryid=8916428&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8914901&amp;saveit=Yes" class="preview"><span id="img-wrapper-3391471"><img data-info="3391471-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgO7MilWeFei" id="img3391471" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8914901"></a><a class="title" href="/cubby_view.html?entryid=8914901&amp;saveit=Yes">04/27/17</a><br><b>Sebastian loves art time</b> <a class="info" href="/cubby_view.html?entryid=8914901&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8901616&amp;saveit=Yes" class="preview"><span id="img-wrapper-3389687"><img data-info="3389687-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgKzMCZQeFei" id="img3389687" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8901616"></a><a class="title" href="/cubby_view.html?entryid=8901616&amp;saveit=Yes">04/26/17</a><br><b>twins!!</b> <a class="info" href="/cubby_view.html?entryid=8901616&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8901474&amp;saveit=Yes" class="preview"><span id="img-wrapper-3389536"><img data-info="3389536-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgKzMy1ReFei" id="img3389536" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8901474"></a><a class="title" href="/cubby_view.html?entryid=8901474&amp;saveit=Yes">Social / Emotional for 04/26/17</a><br><b>being silly outside</b> <a class="info" href="/cubby_view.html?entryid=8901474&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8900819&amp;saveit=Yes" class="preview"><span id="img-wrapper-3388782"><img data-info="3388782-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgKyMSZVeFei" id="img3388782" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8900819"></a><a class="title" href="/cubby_view.html?entryid=8900819&amp;saveit=Yes">Fine Motor for 04/26/17</a><br><b>Being silly and coloring a pretty picture</b> <a class="info" href="/cubby_view.html?entryid=8900819&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8897508&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385852"><img data-info="3385852-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_PitVeFei" id="img3385852" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8897508"></a><a class="title" href="/cubby_view.html?entryid=8897508&amp;saveit=Yes">Language / Vocal Communication, Music for 04/26/17</a><br><b>singing our days of the week song!</b> <a class="info" href="/cubby_view.html?entryid=8897508&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8896493&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385428"><img data-info="3385428-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_MixfeFei" id="img3385428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8896493"></a><a class="title" href="/cubby_view.html?entryid=8896493&amp;saveit=Yes">Social / Emotional for 04/26/17</a><br><b>we love our friends!</b> <a class="info" href="/cubby_view.html?entryid=8896493&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8896321&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385339"><img data-info="3385339-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_NS1eeFei" id="img3385339" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8896321"></a><a class="title" href="/cubby_view.html?entryid=8896321&amp;saveit=Yes">Approaches to Learning / Cognitive for 04/26/17</a><br><b>being silly and slamming the buckets together</b> <a class="info" href="/cubby_view.html?entryid=8896321&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8896220&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385289"><img data-info="3385289-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_NCZeeFei" id="img3385289" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8896220"></a><a class="title" href="/cubby_view.html?entryid=8896220&amp;saveit=Yes">Fine Motor for 04/26/17</a><br><b>painting a lion!</b> <a class="info" href="/cubby_view.html?entryid=8896220&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8862709&amp;saveit=Yes" class="preview"><span id="img-wrapper-3376925"><img data-info="3376925-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg28PyxSeFei" id="img3376925" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8862709"></a><a class="title" href="/cubby_view.html?entryid=8862709&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 04/24/17</a><br><b></b><br>focused on driving <a class="info" href="/cubby_view.html?entryid=8862709&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8857893&amp;saveit=Yes" class="preview"><span id="img-wrapper-3372785"><img data-info="3372785-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg24MSZSeFei" id="img3372785" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8857893"></a><a class="title" href="/cubby_view.html?entryid=8857893&amp;saveit=Yes">Sensory for 04/24/17</a><br><b>painting on sand paper</b> <a class="info" href="/cubby_view.html?entryid=8857893&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8841452&amp;saveit=Yes" class="preview"><span id="img-wrapper-3368385"><img data-info="3368385-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgyyNSZSeFei" id="img3368385" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8841452"></a><a class="title" href="/cubby_view.html?entryid=8841452&amp;saveit=Yes">Health / Safety / Nutrition for 04/21/17</a><br><b>cuddling with his stuffed animal :)</b> <a class="info" href="/cubby_view.html?entryid=8841452&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806913&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358741"><img data-info="3358741-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yMSpWeFei" id="img3358741" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806913"></a><a class="title" href="/cubby_view.html?entryid=8806913&amp;saveit=Yes">Sensory for 04/19/17</a><br><b>playing in the sensory table!</b> <a class="info" href="/cubby_view.html?entryid=8806913&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806306&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358134"><img data-info="3358134-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy1TeFei" id="img3358134" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806306"></a><a class="title" href="/cubby_view.html?entryid=8806306&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>chase! <a class="info" href="/cubby_view.html?entryid=8806306&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806284&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358118"><img data-info="3358118-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy9feFei" id="img3358118" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806284"></a><a class="title" href="/cubby_view.html?entryid=8806284&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>man down! <a class="info" href="/cubby_view.html?entryid=8806284&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806280&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358112"><img data-info="3358112-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy9VeFei" id="img3358112" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806280"></a><a class="title" href="/cubby_view.html?entryid=8806280&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>still going! <a class="info" href="/cubby_view.html?entryid=8806280&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806272&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358107"><img data-info="3358107-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy5QeFei" id="img3358107" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806272"></a><a class="title" href="/cubby_view.html?entryid=8806272&amp;saveit=Yes">Large Motor for 04/19/17</a><br><b></b><br>chasing Ms Clarissa <a class="info" href="/cubby_view.html?entryid=8806272&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806243&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358069"><img data-info="3358069-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNiheeFei" id="img3358069" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806243"></a><a class="title" href="/cubby_view.html?entryid=8806243&amp;saveit=Yes">Large Motor for 04/19/17</a><br><b></b><br>chasing the ball <a class="info" href="/cubby_view.html?entryid=8806243&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806227&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358056"><img data-info="3358056-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNitReFei" id="img3358056" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806227"></a><a class="title" href="/cubby_view.html?entryid=8806227&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor for 04/19/17</a><br><b></b><br>making a pile of trucks <a class="info" href="/cubby_view.html?entryid=8806227&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806284&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358118"><img data-info="3358118-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy9feFei" id="img3358118" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806284"></a><a class="title" href="/cubby_view.html?entryid=8806284&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>man down! <a class="info" href="/cubby_view.html?entryid=8806284&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806280&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358112"><img data-info="3358112-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy9VeFei" id="img3358112" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806280"></a><a class="title" href="/cubby_view.html?entryid=8806280&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>still going! <a class="info" href="/cubby_view.html?entryid=8806280&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806272&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358107"><img data-info="3358107-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy5QeFei" id="img3358107" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806272"></a><a class="title" href="/cubby_view.html?entryid=8806272&amp;saveit=Yes">Large Motor for 04/19/17</a><br><b></b><br>chasing Ms Clarissa <a class="info" href="/cubby_view.html?entryid=8806272&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806243&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358069"><img data-info="3358069-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNiheeFei" id="img3358069" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806243"></a><a class="title" href="/cubby_view.html?entryid=8806243&amp;saveit=Yes">Large Motor for 04/19/17</a><br><b></b><br>chasing the ball <a class="info" href="/cubby_view.html?entryid=8806243&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806227&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358056"><img data-info="3358056-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNitReFei" id="img3358056" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806227"></a><a class="title" href="/cubby_view.html?entryid=8806227&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor for 04/19/17</a><br><b></b><br>making a pile of trucks <a class="info" href="/cubby_view.html?entryid=8806227&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8900819&amp;saveit=Yes" class="preview"><span id="img-wrapper-3388782"><img data-info="3388782-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgKyMSZVeFei" id="img3388782" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8900819"></a><a class="title" href="/cubby_view.html?entryid=8900819&amp;saveit=Yes">Fine Motor for 04/26/17</a><br><b>Being silly and coloring a pretty picture</b> <a class="info" href="/cubby_view.html?entryid=8900819&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8897508&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385852"><img data-info="3385852-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_PitVeFei" id="img3385852" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8897508"></a><a class="title" href="/cubby_view.html?entryid=8897508&amp;saveit=Yes">Language / Vocal Communication, Music for 04/26/17</a><br><b>singing our days of the week song!</b> <a class="info" href="/cubby_view.html?entryid=8897508&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8896493&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385428"><img data-info="3385428-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_MixfeFei" id="img3385428" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8896493"></a><a class="title" href="/cubby_view.html?entryid=8896493&amp;saveit=Yes">Social / Emotional for 04/26/17</a><br><b>we love our friends!</b> <a class="info" href="/cubby_view.html?entryid=8896493&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8896321&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385339"><img data-info="3385339-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_NS1eeFei" id="img3385339" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8896321"></a><a class="title" href="/cubby_view.html?entryid=8896321&amp;saveit=Yes">Approaches to Learning / Cognitive for 04/26/17</a><br><b>being silly and slamming the buckets together</b> <a class="info" href="/cubby_view.html?entryid=8896321&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8896220&amp;saveit=Yes" class="preview"><span id="img-wrapper-3385289"><img data-info="3385289-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgK_NCZeeFei" id="img3385289" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8896220"></a><a class="title" href="/cubby_view.html?entryid=8896220&amp;saveit=Yes">Fine Motor for 04/26/17</a><br><b>painting a lion!</b> <a class="info" href="/cubby_view.html?entryid=8896220&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8862709&amp;saveit=Yes" class="preview"><span id="img-wrapper-3376925"><img data-info="3376925-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg28PyxSeFei" id="img3376925" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8862709"></a><a class="title" href="/cubby_view.html?entryid=8862709&amp;saveit=Yes">Approaches to Learning / Cognitive, Large Motor for 04/24/17</a><br><b></b><br>focused on driving <a class="info" href="/cubby_view.html?entryid=8862709&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8857893&amp;saveit=Yes" class="preview"><span id="img-wrapper-3372785"><img data-info="3372785-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg24MSZSeFei" id="img3372785" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8857893"></a><a class="title" href="/cubby_view.html?entryid=8857893&amp;saveit=Yes">Sensory for 04/24/17</a><br><b>painting on sand paper</b> <a class="info" href="/cubby_view.html?entryid=8857893&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8841452&amp;saveit=Yes" class="preview"><span id="img-wrapper-3368385"><img data-info="3368385-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgyyNSZSeFei" id="img3368385" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8841452"></a><a class="title" href="/cubby_view.html?entryid=8841452&amp;saveit=Yes">Health / Safety / Nutrition for 04/21/17</a><br><b>cuddling with his stuffed animal :)</b> <a class="info" href="/cubby_view.html?entryid=8841452&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806913&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358741"><img data-info="3358741-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yMSpWeFei" id="img3358741" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806913"></a><a class="title" href="/cubby_view.html?entryid=8806913&amp;saveit=Yes">Sensory for 04/19/17</a><br><b>playing in the sensory table!</b> <a class="info" href="/cubby_view.html?entryid=8806913&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806306&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358134"><img data-info="3358134-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy1TeFei" id="img3358134" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806306"></a><a class="title" href="/cubby_view.html?entryid=8806306&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>chase! <a class="info" href="/cubby_view.html?entryid=8806306&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806284&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358118"><img data-info="3358118-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy9feFei" id="img3358118" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806284"></a><a class="title" href="/cubby_view.html?entryid=8806284&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>man down! <a class="info" href="/cubby_view.html?entryid=8806284&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806280&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358112"><img data-info="3358112-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy9VeFei" id="img3358112" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806280"></a><a class="title" href="/cubby_view.html?entryid=8806280&amp;saveit=Yes">Large Motor, Social / Emotional for 04/19/17</a><br><b></b><br>still going! <a class="info" href="/cubby_view.html?entryid=8806280&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806272&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358107"><img data-info="3358107-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNy5QeFei" id="img3358107" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806272"></a><a class="title" href="/cubby_view.html?entryid=8806272&amp;saveit=Yes">Large Motor for 04/19/17</a><br><b></b><br>chasing Ms Clarissa <a class="info" href="/cubby_view.html?entryid=8806272&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806243&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358069"><img data-info="3358069-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNiheeFei" id="img3358069" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806243"></a><a class="title" href="/cubby_view.html?entryid=8806243&amp;saveit=Yes">Large Motor for 04/19/17</a><br><b></b><br>chasing the ball <a class="info" href="/cubby_view.html?entryid=8806243&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8806227&amp;saveit=Yes" class="preview"><span id="img-wrapper-3358056"><img data-info="3358056-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-yNitReFei" id="img3358056" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8806227"></a><a class="title" href="/cubby_view.html?entryid=8806227&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication, Large Motor for 04/19/17</a><br><b></b><br>making a pile of trucks <a class="info" href="/cubby_view.html?entryid=8806227&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8787108&amp;saveit=Yes" class="preview"><span id="img-wrapper-3352051"><img data-info="3352051-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-4NitWeFei" id="img3352051" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8787108"></a><a class="title" href="/cubby_view.html?entryid=8787108&amp;saveit=Yes">04/18/17</a><br><b>Beautiful day for recess</b> <a class="info" href="/cubby_view.html?entryid=8787108&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8786613&amp;saveit=Yes" class="preview"><span id="img-wrapper-3351649"><img data-info="3351649-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg-7MCpeeFei" id="img3351649" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8786613"></a><a class="title" href="/cubby_view.html?entryid=8786613&amp;saveit=Yes">Social / Emotional for 04/18/17</a><br><b></b><br>woke up smiling <a class="info" href="/cubby_view.html?entryid=8786613&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8782040&amp;saveit=Yes" class="preview"><span id="img-wrapper-3347948"><img data-info="3347948-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg69PypfeFei" id="img3347948" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8782040"></a><a class="title" href="/cubby_view.html?entryid=8782040&amp;saveit=Yes">Social / Emotional for 04/18/17</a><br><b></b><br>pouting haha <a class="info" href="/cubby_view.html?entryid=8782040&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8768459&amp;saveit=Yes" class="preview"><span id="img-wrapper-3346268"><img data-info="3346268-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg68NChfeFei" id="img3346268" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8768459"></a><a class="title" href="/cubby_view.html?entryid=8768459&amp;saveit=Yes">Social / Emotional for 04/17/17</a><br><b></b><br>digging out toys together <a class="info" href="/cubby_view.html?entryid=8768459&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8768415&amp;saveit=Yes" class="preview"><span id="img-wrapper-3346222"><img data-info="3346222-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg68NCxVeFei" id="img3346222" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8768415"></a><a class="title" href="/cubby_view.html?entryid=8768415&amp;saveit=Yes">Language / Vocal Communication, Social / Emotional for 04/17/17</a><br><b></b><br>being nice to toys turned into hugs <a class="info" href="/cubby_view.html?entryid=8768415&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8767579&amp;saveit=Yes" class="preview"><span id="img-wrapper-3345237"><img data-info="3345237-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg6_NC1QeFei" id="img3345237" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8767579"></a><a class="title" href="/cubby_view.html?entryid=8767579&amp;saveit=Yes">Health / Safety / Nutrition for 04/17/17</a><br><b>Sebastian is sleeping very well :)</b> <a class="info" href="/cubby_view.html?entryid=8767579&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8763820&amp;saveit=Yes" class="preview"><span id="img-wrapper-3342739"><img data-info="3342739-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg64MS1eeFei" id="img3342739" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8763820"></a><a class="title" href="/cubby_view.html?entryid=8763820&amp;saveit=Yes">04/17/17</a><br><b>making some bubbles with dot markers!</b> <a class="info" href="/cubby_view.html?entryid=8763820&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8762765&amp;saveit=Yes" class="preview"><span id="img-wrapper-3342492"><img data-info="3342492-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg64MidVeFei" id="img3342492" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8762765"></a><a class="title" href="/cubby_view.html?entryid=8762765&amp;saveit=Yes">Social / Emotional for 04/17/17</a><br><b>Sebastian is loving playing outside with his friends</b> <a class="info" href="/cubby_view.html?entryid=8762765&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8751775&amp;saveit=Yes" class="preview"><span id="img-wrapper-3341200"><img data-info="3341200-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbg67NC5XeFei" id="img3341200" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8751775"></a><a class="title" href="/cubby_view.html?entryid=8751775&amp;saveit=Yes">04/14/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=8751775&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8749209&amp;saveit=Yes" class="preview"><span id="img-wrapper-3338787"><img data-info="3338787-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgmyMSZQeFei" id="img3338787" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8749209"></a><a class="title" href="/cubby_view.html?entryid=8749209&amp;saveit=Yes">Approaches to Learning / Cognitive for 04/14/17</a><br><b>Easter Egg Hunt!!</b> <a class="info" href="/cubby_view.html?entryid=8749209&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8735527&amp;saveit=Yes" class="preview"><span id="img-wrapper-3331132"><img data-info="3331132-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgm7Ny1VeFei" id="img3331132" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8735527"></a><a class="title" href="/cubby_view.html?entryid=8735527&amp;saveit=Yes">Approaches to Learning / Cognitive for 04/13/17</a><br><b>Outside fun!</b> <a class="info" href="/cubby_view.html?entryid=8735527&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8721679&amp;saveit=Yes" class="preview"><span id="img-wrapper-3328757"><img data-info="3328757-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgiyMStQeFei" id="img3328757" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8721679"></a><a class="title" href="/cubby_view.html?entryid=8721679&amp;saveit=Yes">Large Motor for 04/12/17</a><br><b>having fun outside with friends</b> <a class="info" href="/cubby_view.html?entryid=8721679&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8701086&amp;saveit=Yes" class="preview"><span id="img-wrapper-3320419"><img data-info="3320419-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgi6Mi9eeFei" id="img3320419" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8701086"></a><a class="title" href="/cubby_view.html?entryid=8701086&amp;saveit=Yes">04/11/17</a><br><b>Easter Party</b><br>don't forget about our Easter party Friday at 2! if you signed up to bring something please bring it by Friday morning! if you weren't able to sign up and would like to bring something please ask Ms Clarissa or Ms Kaela! :) <a class="info" href="/cubby_view.html?entryid=8701086&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8697998&amp;saveit=Yes" class="preview"><span id="img-wrapper-3318543"><img data-info="3318543-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbguyMypUeFei" id="img3318543" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8697998"></a><a class="title" href="/cubby_view.html?entryid=8697998&amp;saveit=Yes">Language / Vocal Communication, Social / Emotional for 04/11/17</a><br><b></b><br>watching friends play outside, together. <a class="info" href="/cubby_view.html?entryid=8697998&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8677646&amp;saveit=Yes" class="preview"><span id="img-wrapper-3312994"><img data-info="3312994-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgu4PydTeFei" id="img3312994" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8677646"></a><a class="title" href="/cubby_view.html?entryid=8677646&amp;saveit=Yes">Fine Motor for 04/10/17</a><br><b>painting a carrot with our hands</b> <a class="info" href="/cubby_view.html?entryid=8677646&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8663140&amp;saveit=Yes" class="preview"><span id="img-wrapper-3307303"><img data-info="3307303-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgq9NS5UeFei" id="img3307303" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8663140"></a><a class="title" href="/cubby_view.html?entryid=8663140&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 04/07/17</a><br><b>leaf painting</b> <a class="info" href="/cubby_view.html?entryid=8663140&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8644631&amp;saveit=Yes" class="preview"><span id="img-wrapper-3300345"><img data-info="3300345-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbgq6NSpSeFei" id="img3300345" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8644631"></a><a class="title" href="/cubby_view.html?entryid=8644631&amp;saveit=Yes">04/06/17</a><br><b>painting an Easter egg (and eating the paint too)</b> <a class="info" href="/cubby_view.html?entryid=8644631&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8612690&amp;saveit=Yes" class="preview"><span id="img-wrapper-3293311"><img data-info="3293311-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwO5NS9WeFei" id="img3293311" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8612690"></a><a class="title" href="/cubby_view.html?entryid=8612690&amp;saveit=Yes">Print Literacy Development for 04/04/17</a><br><b>so proud of his creative writing skills</b> <a class="info" href="/cubby_view.html?entryid=8612690&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8611912&amp;saveit=Yes" class="preview"><span id="img-wrapper-3292523"><img data-info="3292523-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwO4MyxUeFei" id="img3292523" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8611912"></a><a class="title" href="/cubby_view.html?entryid=8611912&amp;saveit=Yes">Health / Safety / Nutrition for 04/04/17</a><br><b></b><br>so his dry skin looks better, but we wanted your opinion too. We think his face seems slightly swollen on the left, but he is eating great and is in a good mood <a class="info" href="/cubby_view.html?entryid=8611912&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607976&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288846"><img data-info="3288846-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyPipReFei" id="img3288846" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607976"></a><a class="title" href="/cubby_view.html?entryid=8607976&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication for 04/04/17</a><br><b>circle time!</b> <a class="info" href="/cubby_view.html?entryid=8607976&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288605"><img data-info="3288605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMC5SeFei" id="img3288605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607439"></a><a class="title" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Math for 04/04/17</a><br><b></b><br>shapes and puzzles <a class="info" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288565"><img data-info="3288565-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMyhSeFei" id="img3288565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607350"></a><a class="title" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes">Dramatic Play, Large Motor for 04/04/17</a><br><b></b><br>playing in the shelf <a class="info" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" class="preview"><span id="img-wrapper-3287195"><img data-info="3287195-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK9NydSeFei" id="img3287195" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8593584"></a><a class="title" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 04/03/17</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280804"><img data-info="3280804-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6Pi5TeFei" id="img3280804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574709"></a><a class="title" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes">Language / Vocal Communication, Music for 03/31/17</a><br><b></b><br>making music saying ding ding <a class="info" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280771"><img data-info="3280771-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6MSlWeFei" id="img3280771" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574686"></a><a class="title" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes">Social / Emotional for 03/31/17</a><br><b></b><br>such a good mood! <a class="info" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288605"><img data-info="3288605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMC5SeFei" id="img3288605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607439"></a><a class="title" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Math for 04/04/17</a><br><b></b><br>shapes and puzzles <a class="info" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288565"><img data-info="3288565-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMyhSeFei" id="img3288565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607350"></a><a class="title" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes">Dramatic Play, Large Motor for 04/04/17</a><br><b></b><br>playing in the shelf <a class="info" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" class="preview"><span id="img-wrapper-3287195"><img data-info="3287195-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK9NydSeFei" id="img3287195" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8593584"></a><a class="title" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 04/03/17</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280804"><img data-info="3280804-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6Pi5TeFei" id="img3280804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574709"></a><a class="title" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes">Language / Vocal Communication, Music for 03/31/17</a><br><b></b><br>making music saying ding ding <a class="info" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280771"><img data-info="3280771-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6MSlWeFei" id="img3280771" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574686"></a><a class="title" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes">Social / Emotional for 03/31/17</a><br><b></b><br>such a good mood! <a class="info" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288605"><img data-info="3288605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMC5SeFei" id="img3288605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607439"></a><a class="title" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Math for 04/04/17</a><br><b></b><br>shapes and puzzles <a class="info" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288565"><img data-info="3288565-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMyhSeFei" id="img3288565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607350"></a><a class="title" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes">Dramatic Play, Large Motor for 04/04/17</a><br><b></b><br>playing in the shelf <a class="info" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" class="preview"><span id="img-wrapper-3287195"><img data-info="3287195-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK9NydSeFei" id="img3287195" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8593584"></a><a class="title" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 04/03/17</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280804"><img data-info="3280804-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6Pi5TeFei" id="img3280804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574709"></a><a class="title" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes">Language / Vocal Communication, Music for 03/31/17</a><br><b></b><br>making music saying ding ding <a class="info" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280771"><img data-info="3280771-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6MSlWeFei" id="img3280771" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574686"></a><a class="title" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes">Social / Emotional for 03/31/17</a><br><b></b><br>such a good mood! <a class="info" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288605"><img data-info="3288605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMC5SeFei" id="img3288605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607439"></a><a class="title" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor, Math for 04/04/17</a><br><b></b><br>shapes and puzzles <a class="info" href="/cubby_view.html?entryid=8607439&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" class="preview"><span id="img-wrapper-3288565"><img data-info="3288565-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwKyMyhSeFei" id="img3288565" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8607350"></a><a class="title" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes">Dramatic Play, Large Motor for 04/04/17</a><br><b></b><br>playing in the shelf <a class="info" href="/cubby_view.html?entryid=8607350&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" class="preview"><span id="img-wrapper-3287195"><img data-info="3287195-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK9NydSeFei" id="img3287195" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8593584"></a><a class="title" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes">Approaches to Learning / Cognitive, Art for 04/03/17</a><br><b>art</b> <a class="info" href="/cubby_view.html?entryid=8593584&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280804"><img data-info="3280804-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6Pi5TeFei" id="img3280804" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574709"></a><a class="title" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes">Language / Vocal Communication, Music for 03/31/17</a><br><b></b><br>making music saying ding ding <a class="info" href="/cubby_view.html?entryid=8574709&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280771"><img data-info="3280771-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6MSlWeFei" id="img3280771" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574686"></a><a class="title" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes">Social / Emotional for 03/31/17</a><br><b></b><br>such a good mood! <a class="info" href="/cubby_view.html?entryid=8574686&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8574629&amp;saveit=Yes" class="preview"><span id="img-wrapper-3280689"><img data-info="3280689-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwK6MCZeeFei" id="img3280689" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8574629"></a><a class="title" href="/cubby_view.html?entryid=8574629&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/31/17</a><br><b></b><br>trying to fit the cup onto the toy <a class="info" href="/cubby_view.html?entryid=8574629&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8571318&amp;saveit=Yes" class="preview"><span id="img-wrapper-3277347"><img data-info="3277347-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw29NSpQeFei" id="img3277347" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8571318"></a><a class="title" href="/cubby_view.html?entryid=8571318&amp;saveit=Yes">Language / Vocal Communication, Print Literacy Development for 03/31/17</a><br><b></b><br>Focused on the No David book <a class="info" href="/cubby_view.html?entryid=8571318&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8569053&amp;saveit=Yes" class="preview"><span id="img-wrapper-3276461"><img data-info="3276461-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw28MihWeFei" id="img3276461" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8569053"></a><a class="title" href="/cubby_view.html?entryid=8569053&amp;saveit=Yes">Large Motor for 03/31/17</a><br><b>throwing the ball around!!</b> <a class="info" href="/cubby_view.html?entryid=8569053&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8534876&amp;saveit=Yes" class="preview"><span id="img-wrapper-3264535"><img data-info="3264535-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwy-My1SeFei" id="img3264535" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8534876"></a><a class="title" href="/cubby_view.html?entryid=8534876&amp;saveit=Yes">Approaches to Learning / Cognitive, Language / Vocal Communication for 03/29/17</a><br><b></b><br>studying that orange. super focused <a class="info" href="/cubby_view.html?entryid=8534876&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8518727&amp;saveit=Yes" class="preview"><span id="img-wrapper-3259556"><img data-info="3259556-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw-zMytReFei" id="img3259556" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8518727"></a><a class="title" href="/cubby_view.html?entryid=8518727&amp;saveit=Yes">Approaches to Learning / Cognitive, Fine Motor for 03/28/17</a><br><b></b><br>working on puzzles <a class="info" href="/cubby_view.html?entryid=8518727&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8518534&amp;saveit=Yes" class="preview"><span id="img-wrapper-3259467"><img data-info="3259467-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw-zMihQeFei" id="img3259467" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8518534"></a><a class="title" href="/cubby_view.html?entryid=8518534&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/28/17</a><br><b>loving circle time</b> <a class="info" href="/cubby_view.html?entryid=8518534&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8503827&amp;saveit=Yes" class="preview"><span id="img-wrapper-3256980"><img data-info="3256980-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw-8PyZXeFei" id="img3256980" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8503827"></a><a class="title" href="/cubby_view.html?entryid=8503827&amp;saveit=Yes">Fine Motor for 03/27/17</a><br><b>stacking the cones</b> <a class="info" href="/cubby_view.html?entryid=8503827&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8499555&amp;saveit=Yes" class="preview"><span id="img-wrapper-3253179"><img data-info="3253179-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw-5NyleeFei" id="img3253179" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8499555"></a><a class="title" href="/cubby_view.html?entryid=8499555&amp;saveit=Yes">Art for 03/27/17</a><br><b>making flowers!</b> <a class="info" href="/cubby_view.html?entryid=8499555&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8480799&amp;saveit=Yes" class="preview"><span id="img-wrapper-3247302"><img data-info="3247302-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw69NS5VeFei" id="img3247302" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8480799"></a><a class="title" href="/cubby_view.html?entryid=8480799&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/24/17</a><br><b>morning  outside time</b> <a class="info" href="/cubby_view.html?entryid=8480799&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8464618&amp;saveit=Yes" class="preview"><span id="img-wrapper-3242163"><img data-info="3242163-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw64NyhUeFei" id="img3242163" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8464618"></a><a class="title" href="/cubby_view.html?entryid=8464618&amp;saveit=Yes">Sensory for 03/23/17</a><br><b>sensory table fun</b> <a class="info" href="/cubby_view.html?entryid=8464618&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8451121&amp;saveit=Yes" class="preview"><span id="img-wrapper-3240658"><img data-info="3240658-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw66MCtfeFei" id="img3240658" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8451121"></a><a class="title" href="/cubby_view.html?entryid=8451121&amp;saveit=Yes">Art for 03/22/17</a><br><b>Coloring!</b> <a class="info" href="/cubby_view.html?entryid=8451121&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8450800&amp;saveit=Yes" class="preview"><span id="img-wrapper-3240329"><img data-info="3240329-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw66NSxeeFei" id="img3240329" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8450800"></a><a class="title" href="/cubby_view.html?entryid=8450800&amp;saveit=Yes">Dramatic Play for 03/22/17</a><br><b>showing me the turtle</b> <a class="info" href="/cubby_view.html?entryid=8450800&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8444857&amp;saveit=Yes" class="preview"><span id="img-wrapper-3235307"><img data-info="3235307-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwm_NS5QeFei" id="img3235307" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8444857"></a><a class="title" href="/cubby_view.html?entryid=8444857&amp;saveit=Yes">Fine Motor for 03/22/17</a><br><b>painting clouds in the sky</b> <a class="info" href="/cubby_view.html?entryid=8444857&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8413306&amp;saveit=Yes" class="preview"><span id="img-wrapper-3227605"><img data-info="3227605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwi9MC5SeFei" id="img3227605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8413306"></a><a class="title" href="/cubby_view.html?entryid=8413306&amp;saveit=Yes">Large Motor, Sensory for 03/20/17</a><br><b></b><br>playing in the tunnel <a class="info" href="/cubby_view.html?entryid=8413306&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8413201&amp;saveit=Yes" class="preview"><span id="img-wrapper-3227506"><img data-info="3227506-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwi9My5ReFei" id="img3227506" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8413201"></a><a class="title" href="/cubby_view.html?entryid=8413201&amp;saveit=Yes">Dramatic Play, Social / Emotional for 03/20/17</a><br><b></b><br>peek! <a class="info" href="/cubby_view.html?entryid=8413201&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8304332&amp;saveit=Yes" class="preview"><span id="img-wrapper-3187254"><img data-info="3187254-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAK9NCtTeFei" id="img3187254" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8304332"></a><a class="title" href="/cubby_view.html?entryid=8304332&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/10/17</a><br><b>reading time</b> <a class="info" href="/cubby_view.html?entryid=8304332&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8286710&amp;saveit=Yes" class="preview"><span id="img-wrapper-3181405"><img data-info="3181405-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAK7Mi5SeFei" id="img3181405" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8286710"></a><a class="title" href="/cubby_view.html?entryid=8286710&amp;saveit=Yes">Fine Motor for 03/09/17</a><br><b>coloring so we can make a tree!</b> <a class="info" href="/cubby_view.html?entryid=8286710&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8250805&amp;saveit=Yes" class="preview"><span id="img-wrapper-3169684"><img data-info="3169684-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyzMCZTeFei" id="img3169684" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8250805"></a><a class="title" href="/cubby_view.html?entryid=8250805&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/07/17</a><br><b>selfie!</b> <a class="info" href="/cubby_view.html?entryid=8250805&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8249136&amp;saveit=Yes" class="preview"><span id="img-wrapper-3169045"><img data-info="3169045-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyzNipSeFei" id="img3169045" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8249136"></a><a class="title" href="/cubby_view.html?entryid=8249136&amp;saveit=Yes">Sensory for 03/07/17</a><br><b>painting with a leaf!</b> <a class="info" href="/cubby_view.html?entryid=8249136&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8247725&amp;saveit=Yes" class="preview"><span id="img-wrapper-3168692"><img data-info="3168692-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyyMCdVeFei" id="img3168692" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8247725"></a><a class="title" href="/cubby_view.html?entryid=8247725&amp;saveit=Yes">Large Motor for 03/07/17</a><br><b>being silly and crawling</b> <a class="info" href="/cubby_view.html?entryid=8247725&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8451121&amp;saveit=Yes" class="preview"><span id="img-wrapper-3240658"><img data-info="3240658-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw66MCtfeFei" id="img3240658" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8451121"></a><a class="title" href="/cubby_view.html?entryid=8451121&amp;saveit=Yes">Art for 03/22/17</a><br><b>Coloring!</b> <a class="info" href="/cubby_view.html?entryid=8451121&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8450800&amp;saveit=Yes" class="preview"><span id="img-wrapper-3240329"><img data-info="3240329-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw66NSxeeFei" id="img3240329" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8450800"></a><a class="title" href="/cubby_view.html?entryid=8450800&amp;saveit=Yes">Dramatic Play for 03/22/17</a><br><b>showing me the turtle</b> <a class="info" href="/cubby_view.html?entryid=8450800&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8444857&amp;saveit=Yes" class="preview"><span id="img-wrapper-3235307"><img data-info="3235307-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwm_NS5QeFei" id="img3235307" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8444857"></a><a class="title" href="/cubby_view.html?entryid=8444857&amp;saveit=Yes">Fine Motor for 03/22/17</a><br><b>painting clouds in the sky</b> <a class="info" href="/cubby_view.html?entryid=8444857&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8413306&amp;saveit=Yes" class="preview"><span id="img-wrapper-3227605"><img data-info="3227605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwi9MC5SeFei" id="img3227605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8413306"></a><a class="title" href="/cubby_view.html?entryid=8413306&amp;saveit=Yes">Large Motor, Sensory for 03/20/17</a><br><b></b><br>playing in the tunnel <a class="info" href="/cubby_view.html?entryid=8413306&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8413201&amp;saveit=Yes" class="preview"><span id="img-wrapper-3227506"><img data-info="3227506-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwi9My5ReFei" id="img3227506" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8413201"></a><a class="title" href="/cubby_view.html?entryid=8413201&amp;saveit=Yes">Dramatic Play, Social / Emotional for 03/20/17</a><br><b></b><br>peek! <a class="info" href="/cubby_view.html?entryid=8413201&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8304332&amp;saveit=Yes" class="preview"><span id="img-wrapper-3187254"><img data-info="3187254-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAK9NCtTeFei" id="img3187254" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8304332"></a><a class="title" href="/cubby_view.html?entryid=8304332&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/10/17</a><br><b>reading time</b> <a class="info" href="/cubby_view.html?entryid=8304332&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8286710&amp;saveit=Yes" class="preview"><span id="img-wrapper-3181405"><img data-info="3181405-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAK7Mi5SeFei" id="img3181405" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8286710"></a><a class="title" href="/cubby_view.html?entryid=8286710&amp;saveit=Yes">Fine Motor for 03/09/17</a><br><b>coloring so we can make a tree!</b> <a class="info" href="/cubby_view.html?entryid=8286710&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8250805&amp;saveit=Yes" class="preview"><span id="img-wrapper-3169684"><img data-info="3169684-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyzMCZTeFei" id="img3169684" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8250805"></a><a class="title" href="/cubby_view.html?entryid=8250805&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/07/17</a><br><b>selfie!</b> <a class="info" href="/cubby_view.html?entryid=8250805&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8249136&amp;saveit=Yes" class="preview"><span id="img-wrapper-3169045"><img data-info="3169045-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyzNipSeFei" id="img3169045" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8249136"></a><a class="title" href="/cubby_view.html?entryid=8249136&amp;saveit=Yes">Sensory for 03/07/17</a><br><b>painting with a leaf!</b> <a class="info" href="/cubby_view.html?entryid=8249136&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8247725&amp;saveit=Yes" class="preview"><span id="img-wrapper-3168692"><img data-info="3168692-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyyMCdVeFei" id="img3168692" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8247725"></a><a class="title" href="/cubby_view.html?entryid=8247725&amp;saveit=Yes">Large Motor for 03/07/17</a><br><b>being silly and crawling</b> <a class="info" href="/cubby_view.html?entryid=8247725&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8230768&amp;saveit=Yes" class="preview"><span id="img-wrapper-3163445"><img data-info="3163445-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAy5MipSeFei" id="img3163445" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8230768"></a><a class="title" href="/cubby_view.html?entryid=8230768&amp;saveit=Yes">Language / Vocal Communication, Music for 03/06/17</a><br><b></b><br>shake it Harley <a class="info" href="/cubby_view.html?entryid=8230768&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8217130&amp;saveit=Yes" class="preview"><span id="img-wrapper-3161777"><img data-info="3161777-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAy7MSlQeFei" id="img3161777" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8217130"></a><a class="title" href="/cubby_view.html?entryid=8217130&amp;saveit=Yes">Dramatic Play for 03/03/17</a><br><b></b><br>Dr Batch in the house <a class="info" href="/cubby_view.html?entryid=8217130&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8212766&amp;saveit=Yes" class="preview"><span id="img-wrapper-3157560"><img data-info="3157560-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA-9MyhXeFei" id="img3157560" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8212766"></a><a class="title" href="/cubby_view.html?entryid=8212766&amp;saveit=Yes">Sensory for 03/03/17</a><br><b>"oh the feet you meet"</b> <a class="info" href="/cubby_view.html?entryid=8212766&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8199072&amp;saveit=Yes" class="preview"><span id="img-wrapper-3155513"><img data-info="3155513-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA-_My9UeFei" id="img3155513" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8199072"></a><a class="title" href="/cubby_view.html?entryid=8199072&amp;saveit=Yes">Large Motor for 03/02/17</a><br><b></b><br>running up the hill <a class="info" href="/cubby_view.html?entryid=8199072&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8193562&amp;saveit=Yes" class="preview"><span id="img-wrapper-3150857"><img data-info="3150857-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA-6PitQeFei" id="img3150857" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8193562"></a><a class="title" href="/cubby_view.html?entryid=8193562&amp;saveit=Yes">Large Motor for 03/02/17</a><br><b>Sebastian's favorite part about recess is playing with the red balls!</b> <a class="info" href="/cubby_view.html?entryid=8193562&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8451121&amp;saveit=Yes" class="preview"><span id="img-wrapper-3240658"><img data-info="3240658-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw66MCtfeFei" id="img3240658" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8451121"></a><a class="title" href="/cubby_view.html?entryid=8451121&amp;saveit=Yes">Art for 03/22/17</a><br><b>Coloring!</b> <a class="info" href="/cubby_view.html?entryid=8451121&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8450800&amp;saveit=Yes" class="preview"><span id="img-wrapper-3240329"><img data-info="3240329-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbw66NSxeeFei" id="img3240329" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8450800"></a><a class="title" href="/cubby_view.html?entryid=8450800&amp;saveit=Yes">Dramatic Play for 03/22/17</a><br><b>showing me the turtle</b> <a class="info" href="/cubby_view.html?entryid=8450800&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8444857&amp;saveit=Yes" class="preview"><span id="img-wrapper-3235307"><img data-info="3235307-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwm_NS5QeFei" id="img3235307" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8444857"></a><a class="title" href="/cubby_view.html?entryid=8444857&amp;saveit=Yes">Fine Motor for 03/22/17</a><br><b>painting clouds in the sky</b> <a class="info" href="/cubby_view.html?entryid=8444857&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8413306&amp;saveit=Yes" class="preview"><span id="img-wrapper-3227605"><img data-info="3227605-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwi9MC5SeFei" id="img3227605" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8413306"></a><a class="title" href="/cubby_view.html?entryid=8413306&amp;saveit=Yes">Large Motor, Sensory for 03/20/17</a><br><b></b><br>playing in the tunnel <a class="info" href="/cubby_view.html?entryid=8413306&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8413201&amp;saveit=Yes" class="preview"><span id="img-wrapper-3227506"><img data-info="3227506-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbwi9My5ReFei" id="img3227506" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8413201"></a><a class="title" href="/cubby_view.html?entryid=8413201&amp;saveit=Yes">Dramatic Play, Social / Emotional for 03/20/17</a><br><b></b><br>peek! <a class="info" href="/cubby_view.html?entryid=8413201&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8304332&amp;saveit=Yes" class="preview"><span id="img-wrapper-3187254"><img data-info="3187254-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAK9NCtTeFei" id="img3187254" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8304332"></a><a class="title" href="/cubby_view.html?entryid=8304332&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/10/17</a><br><b>reading time</b> <a class="info" href="/cubby_view.html?entryid=8304332&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8286710&amp;saveit=Yes" class="preview"><span id="img-wrapper-3181405"><img data-info="3181405-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAK7Mi5SeFei" id="img3181405" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8286710"></a><a class="title" href="/cubby_view.html?entryid=8286710&amp;saveit=Yes">Fine Motor for 03/09/17</a><br><b>coloring so we can make a tree!</b> <a class="info" href="/cubby_view.html?entryid=8286710&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8250805&amp;saveit=Yes" class="preview"><span id="img-wrapper-3169684"><img data-info="3169684-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyzMCZTeFei" id="img3169684" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8250805"></a><a class="title" href="/cubby_view.html?entryid=8250805&amp;saveit=Yes">Approaches to Learning / Cognitive for 03/07/17</a><br><b>selfie!</b> <a class="info" href="/cubby_view.html?entryid=8250805&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8249136&amp;saveit=Yes" class="preview"><span id="img-wrapper-3169045"><img data-info="3169045-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyzNipSeFei" id="img3169045" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8249136"></a><a class="title" href="/cubby_view.html?entryid=8249136&amp;saveit=Yes">Sensory for 03/07/17</a><br><b>painting with a leaf!</b> <a class="info" href="/cubby_view.html?entryid=8249136&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8247725&amp;saveit=Yes" class="preview"><span id="img-wrapper-3168692"><img data-info="3168692-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAyyMCdVeFei" id="img3168692" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8247725"></a><a class="title" href="/cubby_view.html?entryid=8247725&amp;saveit=Yes">Large Motor for 03/07/17</a><br><b>being silly and crawling</b> <a class="info" href="/cubby_view.html?entryid=8247725&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8230768&amp;saveit=Yes" class="preview"><span id="img-wrapper-3163445"><img data-info="3163445-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAy5MipSeFei" id="img3163445" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8230768"></a><a class="title" href="/cubby_view.html?entryid=8230768&amp;saveit=Yes">Language / Vocal Communication, Music for 03/06/17</a><br><b></b><br>shake it Harley <a class="info" href="/cubby_view.html?entryid=8230768&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8217130&amp;saveit=Yes" class="preview"><span id="img-wrapper-3161777"><img data-info="3161777-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAy7MSlQeFei" id="img3161777" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8217130"></a><a class="title" href="/cubby_view.html?entryid=8217130&amp;saveit=Yes">Dramatic Play for 03/03/17</a><br><b></b><br>Dr Batch in the house <a class="info" href="/cubby_view.html?entryid=8217130&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8212766&amp;saveit=Yes" class="preview"><span id="img-wrapper-3157560"><img data-info="3157560-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA-9MyhXeFei" id="img3157560" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8212766"></a><a class="title" href="/cubby_view.html?entryid=8212766&amp;saveit=Yes">Sensory for 03/03/17</a><br><b>"oh the feet you meet"</b> <a class="info" href="/cubby_view.html?entryid=8212766&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8199072&amp;saveit=Yes" class="preview"><span id="img-wrapper-3155513"><img data-info="3155513-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA-_My9UeFei" id="img3155513" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8199072"></a><a class="title" href="/cubby_view.html?entryid=8199072&amp;saveit=Yes">Large Motor for 03/02/17</a><br><b></b><br>running up the hill <a class="info" href="/cubby_view.html?entryid=8199072&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8193562&amp;saveit=Yes" class="preview"><span id="img-wrapper-3150857"><img data-info="3150857-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA-6PitQeFei" id="img3150857" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8193562"></a><a class="title" href="/cubby_view.html?entryid=8193562&amp;saveit=Yes">Large Motor for 03/02/17</a><br><b>Sebastian's favorite part about recess is playing with the red balls!</b> <a class="info" href="/cubby_view.html?entryid=8193562&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8179990&amp;saveit=Yes" class="preview"><span id="img-wrapper-3149138"><img data-info="3149138-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA6zNy1feFei" id="img3149138" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8179990"></a><a class="title" href="/cubby_view.html?entryid=8179990&amp;saveit=Yes">Large Motor, Social / Emotional for 03/01/17</a><br><b></b><br>full of energy this afternoon <a class="info" href="/cubby_view.html?entryid=8179990&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8167948&amp;saveit=Yes" class="preview"><span id="img-wrapper-3144619"><img data-info="3144619-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA6-MC9eeFei" id="img3144619" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8167948"></a><a class="title" href="/cubby_view.html?entryid=8167948&amp;saveit=Yes">Fine Motor for 02/28/17</a><br><b>coloring the lorax!</b> <a class="info" href="/cubby_view.html?entryid=8167948&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Elephants , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8152909&amp;saveit=Yes" class="preview"><span id="img-wrapper-3141733"><img data-info="3141733-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbA67MS1UeFei" id="img3141733" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8152909"></a><a class="title" href="/cubby_view.html?entryid=8152909&amp;saveit=Yes">Health / Safety / Nutrition for 02/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=8152909&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8149298&amp;saveit=Yes" class="preview"><span id="img-wrapper-3138846"><img data-info="3138846-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAmyPipReFei" id="img3138846" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8149298"></a><a class="title" href="/cubby_view.html?entryid=8149298&amp;saveit=Yes">Social / Emotional for 02/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=8149298&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8135118&amp;saveit=Yes" class="preview"><span id="img-wrapper-3136882"><img data-info="3136882-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAm8PiZVeFei" id="img3136882" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8135118"></a><a class="title" href="/cubby_view.html?entryid=8135118&amp;saveit=Yes">Health / Safety / Nutrition for 02/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=8135118&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8132496&amp;saveit=Yes" class="preview"><span id="img-wrapper-3133937"><img data-info="3133937-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAm5Py1QeFei" id="img3133937" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8132496"></a><a class="title" href="/cubby_view.html?entryid=8132496&amp;saveit=Yes">Social / Emotional for 02/24/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=8132496&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8118657&amp;saveit=Yes" class="preview"><span id="img-wrapper-3132070"><img data-info="3132070-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAm4NilXeFei" id="img3132070" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8118657"></a><a class="title" href="/cubby_view.html?entryid=8118657&amp;saveit=Yes">02/23/17</a><br><b>incident report</b> <a class="info" href="/cubby_view.html?entryid=8118657&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8117482&amp;saveit=Yes" class="preview"><span id="img-wrapper-3130862"><img data-info="3130862-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAm6PihVeFei" id="img3130862" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8117482"></a><a class="title" href="/cubby_view.html?entryid=8117482&amp;saveit=Yes">Health / Safety / Nutrition for 02/23/17</a><br><b>yesterday snack time!</b> <a class="info" href="/cubby_view.html?entryid=8117482&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8095624&amp;saveit=Yes" class="preview"><span id="img-wrapper-3121253"><img data-info="3121253-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAi7NCtUeFei" id="img3121253" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8095624"></a><a class="title" href="/cubby_view.html?entryid=8095624&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/22/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=8095624&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8055090&amp;saveit=Yes" class="preview"><span id="img-wrapper-3111628"><img data-info="3111628-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbAu7MCxfeFei" id="img3111628" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8055090"></a><a class="title" href="/cubby_view.html?entryid=8055090&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/17/17</a><br><b>fun outside today!</b> <a class="info" href="/cubby_view.html?entryid=8055090&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=8000151&amp;saveit=Yes" class="preview"><span id="img-wrapper-3090655"><img data-info="3090655-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQO6MCtSeFei" id="img3090655" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="8000151"></a><a class="title" href="/cubby_view.html?entryid=8000151&amp;saveit=Yes">Social / Emotional for 02/14/17</a><br><b>playing with friends</b> <a class="info" href="/cubby_view.html?entryid=8000151&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7982104&amp;saveit=Yes" class="preview"><span id="img-wrapper-3084775"><img data-info="3084775-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQK-MSlSeFei" id="img3084775" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7982104"></a><a class="title" href="/cubby_view.html?entryid=7982104&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/13/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7982104&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7976028&amp;saveit=Yes" class="preview"><span id="img-wrapper-3080289"><img data-info="3080289-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQK6NCZeeFei" id="img3080289" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7976028"></a><a class="title" href="/cubby_view.html?entryid=7976028&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/13/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7976028&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7960788&amp;saveit=Yes" class="preview"><span id="img-wrapper-3075786"><img data-info="3075786-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ2_MSZReFei" id="img3075786" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7960788"></a><a class="title" href="/cubby_view.html?entryid=7960788&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/10/17</a><br><b>hiding from Ms Kenzie</b> <a class="info" href="/cubby_view.html?entryid=7960788&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7942199&amp;saveit=Yes" class="preview"><span id="img-wrapper-3069316"><img data-info="3069316-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQyzNS9ReFei" id="img3069316" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7942199"></a><a class="title" href="/cubby_view.html?entryid=7942199&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7942199&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7929452&amp;saveit=Yes" class="preview"><span id="img-wrapper-3067193"><img data-info="3067193-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQy9NydUeFei" id="img3067193" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7929452"></a><a class="title" href="/cubby_view.html?entryid=7929452&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/08/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7929452&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7925825&amp;saveit=Yes" class="preview"><span id="img-wrapper-3063542"><img data-info="3063542-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQy5MypVeFei" id="img3063542" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7925825"></a><a class="title" href="/cubby_view.html?entryid=7925825&amp;saveit=Yes">Health / Safety / Nutrition for 02/08/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7925825&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7905659&amp;saveit=Yes" class="preview"><span id="img-wrapper-3056265"><img data-info="3056265-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-8NChSeFei" id="img3056265" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7905659"></a><a class="title" href="/cubby_view.html?entryid=7905659&amp;saveit=Yes">Health / Safety / Nutrition for 02/07/17</a><br><b>how to make a nursery silent......give them all teething rings! ????</b> <a class="info" href="/cubby_view.html?entryid=7905659&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7905524&amp;saveit=Yes" class="preview"><span id="img-wrapper-3056168"><img data-info="3056168-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-8NyhfeFei" id="img3056168" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7905524"></a><a class="title" href="/cubby_view.html?entryid=7905524&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/07/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7905524&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7905515&amp;saveit=Yes" class="preview"><span id="img-wrapper-3056166"><img data-info="3056166-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-8NyhReFei" id="img3056166" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7905515"></a><a class="title" href="/cubby_view.html?entryid=7905515&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/07/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7905515&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7905503&amp;saveit=Yes" class="preview"><span id="img-wrapper-3056156"><img data-info="3056156-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-8NytReFei" id="img3056156" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7905503"></a><a class="title" href="/cubby_view.html?entryid=7905503&amp;saveit=Yes">Social / Emotional for 02/07/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7905503&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7905276&amp;saveit=Yes" class="preview"><span id="img-wrapper-3056081"><img data-info="3056081-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-8NiZWeFei" id="img3056081" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7905276"></a><a class="title" href="/cubby_view.html?entryid=7905276&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/07/17</a><br><b>we love playing with blocks!</b> <a class="info" href="/cubby_view.html?entryid=7905276&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7905121&amp;saveit=Yes" class="preview"><span id="img-wrapper-3056026"><img data-info="3056026-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-8NixReFei" id="img3056026" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7905121"></a><a class="title" href="/cubby_view.html?entryid=7905121&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/07/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7905121&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7892818&amp;saveit=Yes" class="preview"><span id="img-wrapper-3054731"><img data-info="3054731-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ--MS1WeFei" id="img3054731" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7892818"></a><a class="title" href="/cubby_view.html?entryid=7892818&amp;saveit=Yes">Social / Emotional for 02/06/17</a><br><b>going for a walk</b> <a class="info" href="/cubby_view.html?entryid=7892818&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7892812&amp;saveit=Yes" class="preview"><span id="img-wrapper-3054727"><img data-info="3054727-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ--MSxQeFei" id="img3054727" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7892812"></a><a class="title" href="/cubby_view.html?entryid=7892812&amp;saveit=Yes">Social / Emotional for 02/06/17</a><br><b>going  for a walk</b> <a class="info" href="/cubby_view.html?entryid=7892812&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7886708&amp;saveit=Yes" class="preview"><span id="img-wrapper-3050008"><img data-info="3050008-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ-6Ni5feFei" id="img3050008" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7886708"></a><a class="title" href="/cubby_view.html?entryid=7886708&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/06/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7886708&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7874225&amp;saveit=Yes" class="preview"><span id="img-wrapper-3048040"><img data-info="3048040-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ6yNipXeFei" id="img3048040" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7874225"></a><a class="title" href="/cubby_view.html?entryid=7874225&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/03/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7874225&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7870671&amp;saveit=Yes" class="preview"><span id="img-wrapper-3044389"><img data-info="3044389-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ6-NSZeeFei" id="img3044389" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7870671"></a><a class="title" href="/cubby_view.html?entryid=7870671&amp;saveit=Yes">Dramatic Play for 02/03/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7870671&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7870642&amp;saveit=Yes" class="preview"><span id="img-wrapper-3044378"><img data-info="3044378-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQ6-NSlfeFei" id="img3044378" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7870642"></a><a class="title" href="/cubby_view.html?entryid=7870642&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/03/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7870642&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7853233&amp;saveit=Yes" class="preview"><span id="img-wrapper-3038634"><img data-info="3038634-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQmyMC1TeFei" id="img3038634" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7853233"></a><a class="title" href="/cubby_view.html?entryid=7853233&amp;saveit=Yes">Social / Emotional for 02/02/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7853233&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7851780&amp;saveit=Yes" class="preview"><span id="img-wrapper-3038051"><img data-info="3038051-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQmyNitWeFei" id="img3038051" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7851780"></a><a class="title" href="/cubby_view.html?entryid=7851780&amp;saveit=Yes">Approaches to Learning / Cognitive for 02/02/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7851780&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7839903&amp;saveit=Yes" class="preview"><span id="img-wrapper-3037079"><img data-info="3037079-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQm9NileeFei" id="img3037079" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7839903"></a><a class="title" href="/cubby_view.html?entryid=7839903&amp;saveit=Yes">Health / Safety / Nutrition for 02/01/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7839903&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7839817&amp;saveit=Yes" class="preview"><span id="img-wrapper-3036982"><img data-info="3036982-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQm8PyZVeFei" id="img3036982" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7839817"></a><a class="title" href="/cubby_view.html?entryid=7839817&amp;saveit=Yes">02/01/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7839817&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7820048&amp;saveit=Yes" class="preview"><span id="img-wrapper-3029424"><img data-info="3029424-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQizMixTeFei" id="img3029424" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7820048"></a><a class="title" href="/cubby_view.html?entryid=7820048&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/31/17</a><br><b>playing with music toys</b> <a class="info" href="/cubby_view.html?entryid=7820048&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7798359&amp;saveit=Yes" class="preview"><span id="img-wrapper-3020064"><img data-info="3020064-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQi6NihTeFei" id="img3020064" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7798359"></a><a class="title" href="/cubby_view.html?entryid=7798359&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/30/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7798359&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7783692&amp;saveit=Yes" class="preview"><span id="img-wrapper-3017121"><img data-info="3017121-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQu9NyxWeFei" id="img3017121" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7783692"></a><a class="title" href="/cubby_view.html?entryid=7783692&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7783692&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7780940&amp;saveit=Yes" class="preview"><span id="img-wrapper-3014241"><img data-info="3014241-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQu-NCpWeFei" id="img3014241" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7780940"></a><a class="title" href="/cubby_view.html?entryid=7780940&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7780940&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7730697&amp;saveit=Yes" class="preview"><span id="img-wrapper-2998778"><img data-info="2998778-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAOyMSlfeFei" id="img2998778" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7730697"></a><a class="title" href="/cubby_view.html?entryid=7730697&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/24/17</a><br><b>gym time</b> <a class="info" href="/cubby_view.html?entryid=7730697&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7712511&amp;saveit=Yes" class="preview"><span id="img-wrapper-2992154"><img data-info="2992154-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAO4NytTeFei" id="img2992154" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7712511"></a><a class="title" href="/cubby_view.html?entryid=7712511&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7712511&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7711767&amp;saveit=Yes" class="preview"><span id="img-wrapper-2991443"><img data-info="2991443-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAO7MipUeFei" id="img2991443" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7711767"></a><a class="title" href="/cubby_view.html?entryid=7711767&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/23/17</a><br><b>making a mess is fun!</b> <a class="info" href="/cubby_view.html?entryid=7711767&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7783692&amp;saveit=Yes" class="preview"><span id="img-wrapper-3017121"><img data-info="3017121-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQu9NyxWeFei" id="img3017121" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7783692"></a><a class="title" href="/cubby_view.html?entryid=7783692&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7783692&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7780940&amp;saveit=Yes" class="preview"><span id="img-wrapper-3014241"><img data-info="3014241-90-0" src="https://www.lifecubby.me/i/rmrmJYwEbQu-NCpWeFei" id="img3014241" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7780940"></a><a class="title" href="/cubby_view.html?entryid=7780940&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/27/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7780940&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7730697&amp;saveit=Yes" class="preview"><span id="img-wrapper-2998778"><img data-info="2998778-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAOyMSlfeFei" id="img2998778" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7730697"></a><a class="title" href="/cubby_view.html?entryid=7730697&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/24/17</a><br><b>gym time</b> <a class="info" href="/cubby_view.html?entryid=7730697&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7712511&amp;saveit=Yes" class="preview"><span id="img-wrapper-2992154"><img data-info="2992154-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAO4NytTeFei" id="img2992154" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7712511"></a><a class="title" href="/cubby_view.html?entryid=7712511&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7712511&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7711767&amp;saveit=Yes" class="preview"><span id="img-wrapper-2991443"><img data-info="2991443-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAO7MipUeFei" id="img2991443" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7711767"></a><a class="title" href="/cubby_view.html?entryid=7711767&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/23/17</a><br><b>making a mess is fun!</b> <a class="info" href="/cubby_view.html?entryid=7711767&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7707420&amp;saveit=Yes" class="preview"><span id="img-wrapper-2987909"><img data-info="2987909-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAK9Py5eeFei" id="img2987909" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7707420"></a><a class="title" href="/cubby_view.html?entryid=7707420&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/23/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7707420&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7694311&amp;saveit=Yes" class="preview"><span id="img-wrapper-2986058"><img data-info="2986058-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAK8NitfeFei" id="img2986058" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7694311"></a><a class="title" href="/cubby_view.html?entryid=7694311&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/20/17</a><br><b>all my friends today</b> <a class="info" href="/cubby_view.html?entryid=7694311&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7694297&amp;saveit=Yes" class="preview"><span id="img-wrapper-2986041"><img data-info="2986041-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAK8NipWeFei" id="img2986041" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7694297"></a><a class="title" href="/cubby_view.html?entryid=7694297&amp;saveit=Yes">Social / Emotional for 01/20/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7694297&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7678020&amp;saveit=Yes" class="preview"><span id="img-wrapper-2980441"><img data-info="2980441-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAK6MipWeFei" id="img2980441" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7678020"></a><a class="title" href="/cubby_view.html?entryid=7678020&amp;saveit=Yes">Health / Safety / Nutrition for 01/19/17</a><br><b>Cup cake pictures</b> <a class="info" href="/cubby_view.html?entryid=7678020&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7676515&amp;saveit=Yes" class="preview"><span id="img-wrapper-2978929"><img data-info="2978929-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA2yPyxeeFei" id="img2978929" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7676515"></a><a class="title" href="/cubby_view.html?entryid=7676515&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/19/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7676515&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7674811&amp;saveit=Yes" class="preview"><span id="img-wrapper-2976786"><img data-info="2976786-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA28MSZReFei" id="img2976786" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7674811"></a><a class="title" href="/cubby_view.html?entryid=7674811&amp;saveit=Yes">Health / Safety / Nutrition for 01/19/17</a><br><b>big kids eating lunch</b> <a class="info" href="/cubby_view.html?entryid=7674811&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7659589&amp;saveit=Yes" class="preview"><span id="img-wrapper-2973527"><img data-info="2973527-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA25MyxQeFei" id="img2973527" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7659589"></a><a class="title" href="/cubby_view.html?entryid=7659589&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7659589&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7658617&amp;saveit=Yes" class="preview"><span id="img-wrapper-2972734"><img data-info="2972734-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA24MS1TeFei" id="img2972734" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7658617"></a><a class="title" href="/cubby_view.html?entryid=7658617&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7658617&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7658600&amp;saveit=Yes" class="preview"><span id="img-wrapper-2972715"><img data-info="2972715-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA24MS9SeFei" id="img2972715" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7658600"></a><a class="title" href="/cubby_view.html?entryid=7658600&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7658600&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7658458&amp;saveit=Yes" class="preview"><span id="img-wrapper-2972564"><img data-info="2972564-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA24MyhTeFei" id="img2972564" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7658458"></a><a class="title" href="/cubby_view.html?entryid=7658458&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7658458&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7655625&amp;saveit=Yes" class="preview"><span id="img-wrapper-2969933"><img data-info="2969933-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAyzPy1UeFei" id="img2969933" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7655625"></a><a class="title" href="/cubby_view.html?entryid=7655625&amp;saveit=Yes">01/18/17</a><br><b></b><br>hey just wanted you to see his rash  it's seams to be getting worst as the day goes on ... <a class="info" href="/cubby_view.html?entryid=7655625&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7654671&amp;saveit=Yes" class="preview"><span id="img-wrapper-2969404"><img data-info="2969404-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAyzMi5TeFei" id="img2969404" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7654671"></a><a class="title" href="/cubby_view.html?entryid=7654671&amp;saveit=Yes">Social / Emotional for 01/18/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7654671&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7616705&amp;saveit=Yes" class="preview"><span id="img-wrapper-2959061"><img data-info="2959061-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA-zNihWeFei" id="img2959061" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7616705"></a><a class="title" href="/cubby_view.html?entryid=7616705&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/13/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7616705&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7596121&amp;saveit=Yes" class="preview"><span id="img-wrapper-2948876"><img data-info="2948876-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA6yPilReFei" id="img2948876" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7596121"></a><a class="title" href="/cubby_view.html?entryid=7596121&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/12/17</a><br><b>Story time</b> <a class="info" href="/cubby_view.html?entryid=7596121&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7595381&amp;saveit=Yes" class="preview"><span id="img-wrapper-2948477"><img data-info="2948477-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA6yMilQeFei" id="img2948477" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7595381"></a><a class="title" href="/cubby_view.html?entryid=7595381&amp;saveit=Yes">Dramatic Play for 01/12/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7595381&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7595352&amp;saveit=Yes" class="preview"><span id="img-wrapper-2948465"><img data-info="2948465-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA6yMihSeFei" id="img2948465" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7595352"></a><a class="title" href="/cubby_view.html?entryid=7595352&amp;saveit=Yes">Social / Emotional for 01/12/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7595352&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7582325&amp;saveit=Yes" class="preview"><span id="img-wrapper-2946680"><img data-info="2946680-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA68MCZXeFei" id="img2946680" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7582325"></a><a class="title" href="/cubby_view.html?entryid=7582325&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/11/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7582325&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7582212&amp;saveit=Yes" class="preview"><span id="img-wrapper-2946613"><img data-info="2946613-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA68MC9UeFei" id="img2946613" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7582212"></a><a class="title" href="/cubby_view.html?entryid=7582212&amp;saveit=Yes">01/11/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7582212&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7578212&amp;saveit=Yes" class="preview"><span id="img-wrapper-2942445"><img data-info="2942445-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA64MipSeFei" id="img2942445" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7578212"></a><a class="title" href="/cubby_view.html?entryid=7578212&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/11/17</a><br><b></b><br>Arts <a class="info" href="/cubby_view.html?entryid=7578212&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7564332&amp;saveit=Yes" class="preview"><span id="img-wrapper-2940446"><img data-info="2940446-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA66MipReFei" id="img2940446" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7564332"></a><a class="title" href="/cubby_view.html?entryid=7564332&amp;saveit=Yes">Health / Safety / Nutrition for 01/10/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7564332&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7564241&amp;saveit=Yes" class="preview"><span id="img-wrapper-2940336"><img data-info="2940336-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZA66NS1ReFei" id="img2940336" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7564241"></a><a class="title" href="/cubby_view.html?entryid=7564241&amp;saveit=Yes">Health / Safety / Nutrition for 01/10/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7564241&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7563752&amp;saveit=Yes" class="preview"><span id="img-wrapper-2939772"><img data-info="2939772-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAmzMSlVeFei" id="img2939772" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7563752"></a><a class="title" href="/cubby_view.html?entryid=7563752&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/10/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7563752&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7546578&amp;saveit=Yes" class="preview"><span id="img-wrapper-2933948"><img data-info="2933948-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAm5PypfeFei" id="img2933948" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7546578"></a><a class="title" href="/cubby_view.html?entryid=7546578&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7546578&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7544619&amp;saveit=Yes" class="preview"><span id="img-wrapper-2931675"><img data-info="2931675-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAm7MClSeFei" id="img2931675" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7544619"></a><a class="title" href="/cubby_view.html?entryid=7544619&amp;saveit=Yes">Health / Safety / Nutrition for 01/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7544619&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7544613&amp;saveit=Yes" class="preview"><span id="img-wrapper-2931673"><img data-info="2931673-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAm7MClUeFei" id="img2931673" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7544613"></a><a class="title" href="/cubby_view.html?entryid=7544613&amp;saveit=Yes">Health / Safety / Nutrition for 01/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7544613&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7544561&amp;saveit=Yes" class="preview"><span id="img-wrapper-2931622"><img data-info="2931622-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAm7MCxVeFei" id="img2931622" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7544561"></a><a class="title" href="/cubby_view.html?entryid=7544561&amp;saveit=Yes">Health / Safety / Nutrition for 01/09/17</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=7544561&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7541440&amp;saveit=Yes" class="preview"><span id="img-wrapper-2929413"><img data-info="2929413-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAizMi9UeFei" id="img2929413" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7541440"></a><a class="title" href="/cubby_view.html?entryid=7541440&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7541440&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7524818&amp;saveit=Yes" class="preview"><span id="img-wrapper-2923673"><img data-info="2923673-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi5MClUeFei" id="img2923673" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7524818"></a><a class="title" href="/cubby_view.html?entryid=7524818&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/06/17</a><br><b>what's this toy</b> <a class="info" href="/cubby_view.html?entryid=7524818&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7512605&amp;saveit=Yes" class="preview"><span id="img-wrapper-2921489"><img data-info="2921489-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi7MiZeeFei" id="img2921489" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7512605"></a><a class="title" href="/cubby_view.html?entryid=7512605&amp;saveit=Yes">Fine Motor, Sensory for 01/05/17</a><br><b>Had fun playing in the gym with friends!!</b> <a class="info" href="/cubby_view.html?entryid=7512605&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7512184&amp;saveit=Yes" class="preview"><span id="img-wrapper-2920823"><img data-info="2920823-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi6PixUeFei" id="img2920823" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7512184"></a><a class="title" href="/cubby_view.html?entryid=7512184&amp;saveit=Yes">Health / Safety / Nutrition for 01/05/17</a><br><b>lunch time!!!</b> <a class="info" href="/cubby_view.html?entryid=7512184&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7512041&amp;saveit=Yes" class="preview"><span id="img-wrapper-2920602"><img data-info="2920602-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi6MC5VeFei" id="img2920602" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7512041"></a><a class="title" href="/cubby_view.html?entryid=7512041&amp;saveit=Yes">Health / Safety / Nutrition for 01/05/17</a><br><b>lunch time!</b> <a class="info" href="/cubby_view.html?entryid=7512041&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7511730&amp;saveit=Yes" class="preview"><span id="img-wrapper-2920100"><img data-info="2920100-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi6Ny5XeFei" id="img2920100" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7511730"></a><a class="title" href="/cubby_view.html?entryid=7511730&amp;saveit=Yes">Health / Safety / Nutrition for 01/05/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7511730&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7509702&amp;saveit=Yes" class="preview"><span id="img-wrapper-2918395"><img data-info="2918395-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAuyNSdSeFei" id="img2918395" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7509702"></a><a class="title" href="/cubby_view.html?entryid=7509702&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/05/17</a><br><b>coloring</b><br>Arts <a class="info" href="/cubby_view.html?entryid=7509702&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7508639&amp;saveit=Yes" class="preview"><span id="img-wrapper-2917737"><img data-info="2917737-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAu9MS1QeFei" id="img2917737" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7508639"></a><a class="title" href="/cubby_view.html?entryid=7508639&amp;saveit=Yes">English Learner Development for 01/05/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7508639&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7495780&amp;saveit=Yes" class="preview"><span id="img-wrapper-2915223"><img data-info="2915223-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAu_NCxUeFei" id="img2915223" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7495780"></a><a class="title" href="/cubby_view.html?entryid=7495780&amp;saveit=Yes">Large Motor for 01/04/17</a><br><b>playing with the ball</b> <a class="info" href="/cubby_view.html?entryid=7495780&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7544561&amp;saveit=Yes" class="preview"><span id="img-wrapper-2931622"><img data-info="2931622-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAm7MCxVeFei" id="img2931622" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7544561"></a><a class="title" href="/cubby_view.html?entryid=7544561&amp;saveit=Yes">Health / Safety / Nutrition for 01/09/17</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=7544561&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7541440&amp;saveit=Yes" class="preview"><span id="img-wrapper-2929413"><img data-info="2929413-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAizMi9UeFei" id="img2929413" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7541440"></a><a class="title" href="/cubby_view.html?entryid=7541440&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/09/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7541440&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7524818&amp;saveit=Yes" class="preview"><span id="img-wrapper-2923673"><img data-info="2923673-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi5MClUeFei" id="img2923673" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7524818"></a><a class="title" href="/cubby_view.html?entryid=7524818&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/06/17</a><br><b>what's this toy</b> <a class="info" href="/cubby_view.html?entryid=7524818&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7512605&amp;saveit=Yes" class="preview"><span id="img-wrapper-2921489"><img data-info="2921489-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi7MiZeeFei" id="img2921489" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7512605"></a><a class="title" href="/cubby_view.html?entryid=7512605&amp;saveit=Yes">Fine Motor, Sensory for 01/05/17</a><br><b>Had fun playing in the gym with friends!!</b> <a class="info" href="/cubby_view.html?entryid=7512605&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7512184&amp;saveit=Yes" class="preview"><span id="img-wrapper-2920823"><img data-info="2920823-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi6PixUeFei" id="img2920823" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7512184"></a><a class="title" href="/cubby_view.html?entryid=7512184&amp;saveit=Yes">Health / Safety / Nutrition for 01/05/17</a><br><b>lunch time!!!</b> <a class="info" href="/cubby_view.html?entryid=7512184&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7512041&amp;saveit=Yes" class="preview"><span id="img-wrapper-2920602"><img data-info="2920602-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi6MC5VeFei" id="img2920602" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7512041"></a><a class="title" href="/cubby_view.html?entryid=7512041&amp;saveit=Yes">Health / Safety / Nutrition for 01/05/17</a><br><b>lunch time!</b> <a class="info" href="/cubby_view.html?entryid=7512041&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7511730&amp;saveit=Yes" class="preview"><span id="img-wrapper-2920100"><img data-info="2920100-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAi6Ny5XeFei" id="img2920100" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7511730"></a><a class="title" href="/cubby_view.html?entryid=7511730&amp;saveit=Yes">Health / Safety / Nutrition for 01/05/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7511730&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7509702&amp;saveit=Yes" class="preview"><span id="img-wrapper-2918395"><img data-info="2918395-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAuyNSdSeFei" id="img2918395" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7509702"></a><a class="title" href="/cubby_view.html?entryid=7509702&amp;saveit=Yes">Approaches to Learning / Cognitive for 01/05/17</a><br><b>coloring</b><br>Arts <a class="info" href="/cubby_view.html?entryid=7509702&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7508639&amp;saveit=Yes" class="preview"><span id="img-wrapper-2917737"><img data-info="2917737-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAu9MS1QeFei" id="img2917737" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7508639"></a><a class="title" href="/cubby_view.html?entryid=7508639&amp;saveit=Yes">English Learner Development for 01/05/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7508639&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7495780&amp;saveit=Yes" class="preview"><span id="img-wrapper-2915223"><img data-info="2915223-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAu_NCxUeFei" id="img2915223" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7495780"></a><a class="title" href="/cubby_view.html?entryid=7495780&amp;saveit=Yes">Large Motor for 01/04/17</a><br><b>playing with the ball</b> <a class="info" href="/cubby_view.html?entryid=7495780&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7494300&amp;saveit=Yes" class="preview"><span id="img-wrapper-2913384"><img data-info="2913384-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAu5NSZTeFei" id="img2913384" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7494300"></a><a class="title" href="/cubby_view.html?entryid=7494300&amp;saveit=Yes">Health / Safety / Nutrition for 01/04/17</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7494300&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7491245&amp;saveit=Yes" class="preview"><span id="img-wrapper-2911638"><img data-info="2911638-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZAu7MC1feFei" id="img2911638" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7491245"></a><a class="title" href="/cubby_view.html?entryid=7491245&amp;saveit=Yes">English Learner Development for 01/04/17</a><br><b>circle time! flash cards and singing!</b> <a class="info" href="/cubby_view.html?entryid=7491245&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7420559&amp;saveit=Yes" class="preview"><span id="img-wrapper-2892737"><img data-info="2892737-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQO4MS1QeFei" id="img2892737" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7420559"></a><a class="title" href="/cubby_view.html?entryid=7420559&amp;saveit=Yes">Health / Safety / Nutrition for 12/22/16</a><br><b>he just couldn't make it any longer. :(</b> <a class="info" href="/cubby_view.html?entryid=7420559&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7405869&amp;saveit=Yes" class="preview"><span id="img-wrapper-2886664"><img data-info="2886664-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQK8MChTeFei" id="img2886664" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7405869"></a><a class="title" href="/cubby_view.html?entryid=7405869&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/21/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7405869&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7378186&amp;saveit=Yes" class="preview"><span id="img-wrapper-2879123"><img data-info="2879123-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ2zNyxUeFei" id="img2879123" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7378186"></a><a class="title" href="/cubby_view.html?entryid=7378186&amp;saveit=Yes">Dramatic Play, Social / Emotional for 12/19/16</a><br><b>playing with cars</b> <a class="info" href="/cubby_view.html?entryid=7378186&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7359293&amp;saveit=Yes" class="preview"><span id="img-wrapper-2870233"><img data-info="2870233-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ26NC1UeFei" id="img2870233" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7359293"></a><a class="title" href="/cubby_view.html?entryid=7359293&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/16/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7359293&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7344677&amp;saveit=Yes" class="preview"><span id="img-wrapper-2865528"><img data-info="2865528-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQy_MyxfeFei" id="img2865528" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7344677"></a><a class="title" href="/cubby_view.html?entryid=7344677&amp;saveit=Yes">Social / Emotional for 12/15/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7344677&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7327193&amp;saveit=Yes" class="preview"><span id="img-wrapper-2859713"><img data-info="2859713-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ-zMS9UeFei" id="img2859713" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7327193"></a><a class="title" href="/cubby_view.html?entryid=7327193&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/14/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7327193&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7312332&amp;saveit=Yes" class="preview"><span id="img-wrapper-2855348"><img data-info="2855348-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ-_NSpfeFei" id="img2855348" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7312332"></a><a class="title" href="/cubby_view.html?entryid=7312332&amp;saveit=Yes">Health / Safety / Nutrition for 12/13/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7312332&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7309609&amp;saveit=Yes" class="preview"><span id="img-wrapper-2854074"><img data-info="2854074-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ--NilTeFei" id="img2854074" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7309609"></a><a class="title" href="/cubby_view.html?entryid=7309609&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/13/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7309609&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7309239&amp;saveit=Yes" class="preview"><span id="img-wrapper-2853987"><img data-info="2853987-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ-5PyZQeFei" id="img2853987" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7309239"></a><a class="title" href="/cubby_view.html?entryid=7309239&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/13/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7309239&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7277878&amp;saveit=Yes" class="preview"><span id="img-wrapper-2843159"><img data-info="2843159-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ65NyteeFei" id="img2843159" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7277878"></a><a class="title" href="/cubby_view.html?entryid=7277878&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/09/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7277878&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7265198&amp;saveit=Yes" class="preview"><span id="img-wrapper-2840524"><img data-info="2840524-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQ66MyxTeFei" id="img2840524" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7265198"></a><a class="title" href="/cubby_view.html?entryid=7265198&amp;saveit=Yes">Health / Safety / Nutrition for 12/08/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7265198&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7199427&amp;saveit=Yes" class="preview"><span id="img-wrapper-2818482"><img data-info="2818482-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQuyMiZVeFei" id="img2818482" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7199427"></a><a class="title" href="/cubby_view.html?entryid=7199427&amp;saveit=Yes">Health / Safety / Nutrition for 12/02/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7199427&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7198944&amp;saveit=Yes" class="preview"><span id="img-wrapper-2817973"><img data-info="2817973-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQu9PylUeFei" id="img2817973" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7198944"></a><a class="title" href="/cubby_view.html?entryid=7198944&amp;saveit=Yes">Approaches to Learning / Cognitive for 12/02/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7198944&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7198862&amp;saveit=Yes" class="preview"><span id="img-wrapper-2817876"><img data-info="2817876-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQu9PilReFei" id="img2817876" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7198862"></a><a class="title" href="/cubby_view.html?entryid=7198862&amp;saveit=Yes">Social / Emotional for 12/02/16</a><br><b>friends</b> <a class="info" href="/cubby_view.html?entryid=7198862&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7198785&amp;saveit=Yes" class="preview"><span id="img-wrapper-2817738"><img data-info="2817738-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQu9MS1feFei" id="img2817738" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7198785"></a><a class="title" href="/cubby_view.html?entryid=7198785&amp;saveit=Yes">Social / Emotional for 12/02/16</a><br><b>won't look at the camera</b> <a class="info" href="/cubby_view.html?entryid=7198785&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7183917&amp;saveit=Yes" class="preview"><span id="img-wrapper-2813967"><img data-info="2813967-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQu5PyhQeFei" id="img2813967" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7183917"></a><a class="title" href="/cubby_view.html?entryid=7183917&amp;saveit=Yes">Social / Emotional for 12/01/16</a><br><b>snack time</b> <a class="info" href="/cubby_view.html?entryid=7183917&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7183871&amp;saveit=Yes" class="preview"><span id="img-wrapper-2813924"><img data-info="2813924-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQu5PyxTeFei" id="img2813924" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7183871"></a><a class="title" href="/cubby_view.html?entryid=7183871&amp;saveit=Yes">Social / Emotional for 12/01/16</a><br><b>cupcakes</b> <a class="info" href="/cubby_view.html?entryid=7183871&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7166795&amp;saveit=Yes" class="preview"><span id="img-wrapper-2808717"><img data-info="2808717-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQqyMS9QeFei" id="img2808717" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7166795"></a><a class="title" href="/cubby_view.html?entryid=7166795&amp;saveit=Yes">Health / Safety / Nutrition for 11/30/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7166795&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7162038&amp;saveit=Yes" class="preview"><span id="img-wrapper-2804715"><img data-info="2804715-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq-MS9SeFei" id="img2804715" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7162038"></a><a class="title" href="/cubby_view.html?entryid=7162038&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/30/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7162038&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7148699&amp;saveit=Yes" class="preview"><span id="img-wrapper-2802721"><img data-info="2802721-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq4MSxWeFei" id="img2802721" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7148699"></a><a class="title" href="/cubby_view.html?entryid=7148699&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/29/16</a><br><b>birthday twins!!</b> <a class="info" href="/cubby_view.html?entryid=7148699&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7146468&amp;saveit=Yes" class="preview"><span id="img-wrapper-2800325"><img data-info="2800325-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq6NSxSeFei" id="img2800325" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7146468"></a><a class="title" href="/cubby_view.html?entryid=7146468&amp;saveit=Yes">Social / Emotional for 11/29/16</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=7146468&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7146206&amp;saveit=Yes" class="preview"><span id="img-wrapper-2800184"><img data-info="2800184-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq6NyZTeFei" id="img2800184" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7146206"></a><a class="title" href="/cubby_view.html?entryid=7146206&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/29/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7146206&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7146191&amp;saveit=Yes" class="preview"><span id="img-wrapper-2800171"><img data-info="2800171-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq6NylWeFei" id="img2800171" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7146191"></a><a class="title" href="/cubby_view.html?entryid=7146191&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 11/29/16</a><br><b>Birthday Boy!</b> <a class="info" href="/cubby_view.html?entryid=7146191&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7162038&amp;saveit=Yes" class="preview"><span id="img-wrapper-2804715"><img data-info="2804715-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq-MS9SeFei" id="img2804715" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7162038"></a><a class="title" href="/cubby_view.html?entryid=7162038&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/30/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7162038&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7148699&amp;saveit=Yes" class="preview"><span id="img-wrapper-2802721"><img data-info="2802721-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq4MSxWeFei" id="img2802721" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7148699"></a><a class="title" href="/cubby_view.html?entryid=7148699&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/29/16</a><br><b>birthday twins!!</b> <a class="info" href="/cubby_view.html?entryid=7148699&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7146468&amp;saveit=Yes" class="preview"><span id="img-wrapper-2800325"><img data-info="2800325-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq6NSxSeFei" id="img2800325" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7146468"></a><a class="title" href="/cubby_view.html?entryid=7146468&amp;saveit=Yes">Social / Emotional for 11/29/16</a><br><b>lunch time</b> <a class="info" href="/cubby_view.html?entryid=7146468&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7146206&amp;saveit=Yes" class="preview"><span id="img-wrapper-2800184"><img data-info="2800184-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq6NyZTeFei" id="img2800184" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7146206"></a><a class="title" href="/cubby_view.html?entryid=7146206&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/29/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7146206&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7146191&amp;saveit=Yes" class="preview"><span id="img-wrapper-2800171"><img data-info="2800171-90-0" src="https://www.lifecubby.me/i/rmrmJYwFZQq6NylWeFei" id="img2800171" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7146191"></a><a class="title" href="/cubby_view.html?entryid=7146191&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 11/29/16</a><br><b>Birthday Boy!</b> <a class="info" href="/cubby_view.html?entryid=7146191&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7115049&amp;saveit=Yes" class="preview"><span id="img-wrapper-2792899"><img data-info="2792899-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagO4PideeFei" id="img2792899" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7115049"></a><a class="title" href="/cubby_view.html?entryid=7115049&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/23/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7115049&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7114892&amp;saveit=Yes" class="preview"><span id="img-wrapper-2792701"><img data-info="2792701-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagO4MS5WeFei" id="img2792701" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7114892"></a><a class="title" href="/cubby_view.html?entryid=7114892&amp;saveit=Yes">Health / Safety / Nutrition for 11/23/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7114892&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7103017&amp;saveit=Yes" class="preview"><span id="img-wrapper-2788734"><img data-info="2788734-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagKyMS1TeFei" id="img2788734" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7103017"></a><a class="title" href="/cubby_view.html?entryid=7103017&amp;saveit=Yes">Social / Emotional for 11/22/16</a><br><b>he saw about to take his pic and rushed over for cuddles</b> <a class="info" href="/cubby_view.html?entryid=7103017&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7101120&amp;saveit=Yes" class="preview"><span id="img-wrapper-2786837"><img data-info="2786837-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagK8Pi1QeFei" id="img2786837" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7101120"></a><a class="title" href="/cubby_view.html?entryid=7101120&amp;saveit=Yes">Health / Safety / Nutrition for 11/22/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7101120&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7101064&amp;saveit=Yes" class="preview"><span id="img-wrapper-2786759"><img data-info="2786759-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagK8MSteeFei" id="img2786759" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7101064"></a><a class="title" href="/cubby_view.html?entryid=7101064&amp;saveit=Yes">Health / Safety / Nutrition for 11/22/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7101064&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7100122&amp;saveit=Yes" class="preview"><span id="img-wrapper-2785773"><img data-info="2785773-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagK_MSlUeFei" id="img2785773" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7100122"></a><a class="title" href="/cubby_view.html?entryid=7100122&amp;saveit=Yes">Health / Safety / Nutrition for 11/22/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7100122&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7087484&amp;saveit=Yes" class="preview"><span id="img-wrapper-2783600"><img data-info="2783600-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagK5MC5XeFei" id="img2783600" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7087484"></a><a class="title" href="/cubby_view.html?entryid=7087484&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/21/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7087484&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7087404&amp;saveit=Yes" class="preview"><span id="img-wrapper-2783517"><img data-info="2783517-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagK5My9QeFei" id="img2783517" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7087404"></a><a class="title" href="/cubby_view.html?entryid=7087404&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/21/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7087404&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7087397&amp;saveit=Yes" class="preview"><span id="img-wrapper-2783515"><img data-info="2783515-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagK5My9SeFei" id="img2783515" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7087397"></a><a class="title" href="/cubby_view.html?entryid=7087397&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/21/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7087397&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7068932&amp;saveit=Yes" class="preview"><span id="img-wrapper-2775511"><img data-info="2775511-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag2_My9WeFei" id="img2775511" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7068932"></a><a class="title" href="/cubby_view.html?entryid=7068932&amp;saveit=Yes">Health / Safety / Nutrition for 11/18/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7068932&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7068353&amp;saveit=Yes" class="preview"><span id="img-wrapper-2775200"><img data-info="2775200-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag2_NC5XeFei" id="img2775200" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7068353"></a><a class="title" href="/cubby_view.html?entryid=7068353&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/18/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7068353&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7054736&amp;saveit=Yes" class="preview"><span id="img-wrapper-2772314"><img data-info="2772314-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag24NS9TeFei" id="img2772314" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7054736"></a><a class="title" href="/cubby_view.html?entryid=7054736&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/17/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7054736&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7037758&amp;saveit=Yes" class="preview"><span id="img-wrapper-2766553"><img data-info="2766553-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagy8MytUeFei" id="img2766553" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7037758"></a><a class="title" href="/cubby_view.html?entryid=7037758&amp;saveit=Yes">Health / Safety / Nutrition for 11/16/16</a><br><b>loved snack!</b> <a class="info" href="/cubby_view.html?entryid=7037758&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7034228&amp;saveit=Yes" class="preview"><span id="img-wrapper-2763133"><img data-info="2763133-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagy5Ny1UeFei.png" id="img2763133" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7034228"></a><a class="title" href="/cubby_view.html?entryid=7034228&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/16/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7034228&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7033862&amp;saveit=Yes" class="preview"><span id="img-wrapper-2762938"><img data-info="2762938-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagy4Py1feFei" id="img2762938" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7033862"></a><a class="title" href="/cubby_view.html?entryid=7033862&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/16/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7033862&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7068353&amp;saveit=Yes" class="preview"><span id="img-wrapper-2775200"><img data-info="2775200-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag2_NC5XeFei" id="img2775200" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7068353"></a><a class="title" href="/cubby_view.html?entryid=7068353&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/18/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7068353&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7054736&amp;saveit=Yes" class="preview"><span id="img-wrapper-2772314"><img data-info="2772314-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag24NS9TeFei" id="img2772314" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7054736"></a><a class="title" href="/cubby_view.html?entryid=7054736&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/17/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7054736&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7037758&amp;saveit=Yes" class="preview"><span id="img-wrapper-2766553"><img data-info="2766553-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagy8MytUeFei" id="img2766553" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7037758"></a><a class="title" href="/cubby_view.html?entryid=7037758&amp;saveit=Yes">Health / Safety / Nutrition for 11/16/16</a><br><b>loved snack!</b> <a class="info" href="/cubby_view.html?entryid=7037758&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7034228&amp;saveit=Yes" class="preview"><span id="img-wrapper-2763133"><img data-info="2763133-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagy5Ny1UeFei.png" id="img2763133" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7034228"></a><a class="title" href="/cubby_view.html?entryid=7034228&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/16/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7034228&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7033862&amp;saveit=Yes" class="preview"><span id="img-wrapper-2762938"><img data-info="2762938-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagy4Py1feFei" id="img2762938" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7033862"></a><a class="title" href="/cubby_view.html?entryid=7033862&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/16/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7033862&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7020614&amp;saveit=Yes" class="preview"><span id="img-wrapper-2761227"><img data-info="2761227-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagy7NCxQeFei.png" id="img2761227" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7020614"></a><a class="title" href="/cubby_view.html?entryid=7020614&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/15/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7020614&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=7017948&amp;saveit=Yes" class="preview"><span id="img-wrapper-2758302"><img data-info="2758302-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag-yNS5VeFei" id="img2758302" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="7017948"></a><a class="title" href="/cubby_view.html?entryid=7017948&amp;saveit=Yes">Health / Safety / Nutrition for 11/15/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=7017948&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6998218&amp;saveit=Yes" class="preview"><span id="img-wrapper-2751865"><img data-info="2751865-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFag-7PihSeFei.png" id="img2751865" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6998218"></a><a class="title" href="/cubby_view.html?entryid=6998218&amp;saveit=Yes">Social / Emotional for 11/14/16</a><br><b>having fun</b> <a class="info" href="/cubby_view.html?entryid=6998218&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6986334&amp;saveit=Yes" class="preview"><span id="img-wrapper-2750678"><img data-info="2750678-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag-6MClfeFei" id="img2750678" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6986334"></a><a class="title" href="/cubby_view.html?entryid=6986334&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/11/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6986334&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6972300&amp;saveit=Yes" class="preview"><span id="img-wrapper-2744554"><img data-info="2744554-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag6-MytTeFei" id="img2744554" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6972300"></a><a class="title" href="/cubby_view.html?entryid=6972300&amp;saveit=Yes">Health / Safety / Nutrition for 11/10/16</a><br><b>someone was a little tired at lunch today</b> <a class="info" href="/cubby_view.html?entryid=6972300&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6972273&amp;saveit=Yes" class="preview"><span id="img-wrapper-2744512"><img data-info="2744512-90-0" src="https://www.lifecubby.me/i/rmrmJYwFag6-My9VeFei" id="img2744512" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6972273"></a><a class="title" href="/cubby_view.html?entryid=6972273&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/10/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6972273&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6955973&amp;saveit=Yes" class="preview"><span id="img-wrapper-2739965"><img data-info="2739965-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagmzPyhSeFei.png" id="img2739965" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6955973"></a><a class="title" href="/cubby_view.html?entryid=6955973&amp;saveit=Yes">Health / Safety / Nutrition for 11/09/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6955973&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6937812&amp;saveit=Yes" class="preview"><span id="img-wrapper-2732475"><img data-info="2732475-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagm4MilSeFei.png" id="img2732475" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6937812"></a><a class="title" href="/cubby_view.html?entryid=6937812&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/08/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6937812&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6937719&amp;saveit=Yes" class="preview"><span id="img-wrapper-2732371"><img data-info="2732371-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagm4NSlWeFei.png" id="img2732371" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6937719"></a><a class="title" href="/cubby_view.html?entryid=6937719&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/08/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6937719&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6917776&amp;saveit=Yes" class="preview"><span id="img-wrapper-2723769"><img data-info="2723769-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagi5MSheeFei.png" id="img2723769" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6917776"></a><a class="title" href="/cubby_view.html?entryid=6917776&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/07/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6917776&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6906002&amp;saveit=Yes" class="preview"><span id="img-wrapper-2722306"><img data-info="2722306-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagi4NS5ReFei" id="img2722306" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6906002"></a><a class="title" href="/cubby_view.html?entryid=6906002&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/04/16</a><br><b>helping with art projects while the others sleep </b> <a class="info" href="/cubby_view.html?entryid=6906002&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6904485&amp;saveit=Yes" class="preview"><span id="img-wrapper-2720766"><img data-info="2720766-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagi6MShReFei" id="img2720766" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6904485"></a><a class="title" href="/cubby_view.html?entryid=6904485&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/04/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6904485&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6901642&amp;saveit=Yes" class="preview"><span id="img-wrapper-2718483"><img data-info="2718483-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaguyMiZUeFei.png" id="img2718483" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6901642"></a><a class="title" href="/cubby_view.html?entryid=6901642&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/04/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6901642&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6887087&amp;saveit=Yes" class="preview"><span id="img-wrapper-2713749"><img data-info="2713749-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagu5MSpeeFei.jpg" id="img2713749" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6887087"></a><a class="title" href="/cubby_view.html?entryid=6887087&amp;saveit=Yes">Health / Safety / Nutrition for 11/03/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6887087&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6886658&amp;saveit=Yes" class="preview"><span id="img-wrapper-2713484"><img data-info="2713484-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagu5MiZTeFei" id="img2713484" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6886658"></a><a class="title" href="/cubby_view.html?entryid=6886658&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/03/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6886658&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6872528&amp;saveit=Yes" class="preview"><span id="img-wrapper-2710377"><img data-info="2710377-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagu6NSlQeFei.jpg" id="img2710377" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6872528"></a><a class="title" href="/cubby_view.html?entryid=6872528&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/02/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6872528&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6872515&amp;saveit=Yes" class="preview"><span id="img-wrapper-2710353"><img data-info="2710353-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagu6NStUeFei.jpg" id="img2710353" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6872515"></a><a class="title" href="/cubby_view.html?entryid=6872515&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/02/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6872515&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6855217&amp;saveit=Yes" class="preview"><span id="img-wrapper-2703909"><img data-info="2703909-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFagq5Py5eeFei.jpg" id="img2703909" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6855217"></a><a class="title" href="/cubby_view.html?entryid=6855217&amp;saveit=Yes">Approaches to Learning / Cognitive, Health / Safety / Nutrition for 11/01/16</a><br><b>waiting she snack. everyone is talking and clapping and waving</b> <a class="info" href="/cubby_view.html?entryid=6855217&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6852937&amp;saveit=Yes" class="preview"><span id="img-wrapper-2701508"><img data-info="2701508-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagq7My5feFei" id="img2701508" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6852937"></a><a class="title" href="/cubby_view.html?entryid=6852937&amp;saveit=Yes">Health / Safety / Nutrition for 11/01/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6852937&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6852175&amp;saveit=Yes" class="preview"><span id="img-wrapper-2701044"><img data-info="2701044-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagq7NipTeFei" id="img2701044" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6852175"></a><a class="title" href="/cubby_view.html?entryid=6852175&amp;saveit=Yes">Dramatic Play for 11/01/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6852175&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6851170&amp;saveit=Yes" class="preview"><span id="img-wrapper-2700642"><img data-info="2700642-90-0" src="https://www.lifecubby.me/i/rmrmJYwFagq6MCpVeFei" id="img2700642" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6851170"></a><a class="title" href="/cubby_view.html?entryid=6851170&amp;saveit=Yes">Approaches to Learning / Cognitive for 11/01/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6851170&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6836047&amp;saveit=Yes" class="preview"><span id="img-wrapper-2694647"><img data-info="2694647-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawO-MCpQeFei.jpg" id="img2694647" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6836047"></a><a class="title" href="/cubby_view.html?entryid=6836047&amp;saveit=Yes">Social / Emotional for 10/31/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6836047&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6835405&amp;saveit=Yes" class="preview"><span id="img-wrapper-2694253"><img data-info="2694253-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawO-NCtUeFei.jpg" id="img2694253" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6835405"></a><a class="title" href="/cubby_view.html?entryid=6835405&amp;saveit=Yes">Social / Emotional for 10/31/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6835405&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6821999&amp;saveit=Yes" class="preview"><span id="img-wrapper-2691235"><img data-info="2691235-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawO7NC1SeFei.png" id="img2691235" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6821999"></a><a class="title" href="/cubby_view.html?entryid=6821999&amp;saveit=Yes">Health / Safety / Nutrition for 10/28/16</a><br><b>Snack Time!</b> <a class="info" href="/cubby_view.html?entryid=6821999&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6821089&amp;saveit=Yes" class="preview"><span id="img-wrapper-2690033"><img data-info="2690033-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawO6Ni1UeFei.png" id="img2690033" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6821089"></a><a class="title" href="/cubby_view.html?entryid=6821089&amp;saveit=Yes">Social / Emotional for 10/28/16</a><br><b>having fun</b> <a class="info" href="/cubby_view.html?entryid=6821089&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6818367&amp;saveit=Yes" class="preview"><span id="img-wrapper-2687534"><img data-info="2687534-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawK9My1TeFei" id="img2687534" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6818367"></a><a class="title" href="/cubby_view.html?entryid=6818367&amp;saveit=Yes">Large Motor for 10/28/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6818367&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6806156&amp;saveit=Yes" class="preview"><span id="img-wrapper-2685054"><img data-info="2685054-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawK_NitTeFei" id="img2685054" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6806156"></a><a class="title" href="/cubby_view.html?entryid=6806156&amp;saveit=Yes">10/27/16</a><br><b>snack time!</b> <a class="info" href="/cubby_view.html?entryid=6806156&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6805492&amp;saveit=Yes" class="preview"><span id="img-wrapper-2684271"><img data-info="2684271-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawK-NClWeFei.jpg" id="img2684271" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6805492"></a><a class="title" href="/cubby_view.html?entryid=6805492&amp;saveit=Yes">Health / Safety / Nutrition for 10/27/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6805492&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6802878&amp;saveit=Yes" class="preview"><span id="img-wrapper-2681415"><img data-info="2681415-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawK7Mi9SeFei.jpg" id="img2681415" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6802878"></a><a class="title" href="/cubby_view.html?entryid=6802878&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 10/27/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6802878&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6802594&amp;saveit=Yes" class="preview"><span id="img-wrapper-2681260"><img data-info="2681260-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawK7NChXeFei" id="img2681260" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6802594"></a><a class="title" href="/cubby_view.html?entryid=6802594&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/27/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6802594&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6802380&amp;saveit=Yes" class="preview"><span id="img-wrapper-2681108"><img data-info="2681108-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawK7Ny5feFei" id="img2681108" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6802380"></a><a class="title" href="/cubby_view.html?entryid=6802380&amp;saveit=Yes">Approaches to Learning / Cognitive, Social / Emotional for 10/27/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6802380&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6789757&amp;saveit=Yes" class="preview"><span id="img-wrapper-2679126"><img data-info="2679126-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaw2zNyxReFei" id="img2679126" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6789757"></a><a class="title" href="/cubby_view.html?entryid=6789757&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/26/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6789757&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6789570&amp;saveit=Yes" class="preview"><span id="img-wrapper-2678933"><img data-info="2678933-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaw2yPy1UeFei.png" id="img2678933" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6789570"></a><a class="title" href="/cubby_view.html?entryid=6789570&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/26/16</a><br><b>playing cars</b> <a class="info" href="/cubby_view.html?entryid=6789570&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6771308&amp;saveit=Yes" class="preview"><span id="img-wrapper-2671170"><img data-info="2671170-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaw27NylXeFei" id="img2671170" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6771308"></a><a class="title" href="/cubby_view.html?entryid=6771308&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/25/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6771308&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6770970&amp;saveit=Yes" class="preview"><span id="img-wrapper-2670707"><img data-info="2670707-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaw26MS5QeFei.jpg" id="img2670707" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6770970"></a><a class="title" href="/cubby_view.html?entryid=6770970&amp;saveit=Yes">Health / Safety / Nutrition for 10/25/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6770970&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6770800&amp;saveit=Yes" class="preview"><span id="img-wrapper-2670479"><img data-info="2670479-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaw26MileeFei.jpg" id="img2670479" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6770800"></a><a class="title" href="/cubby_view.html?entryid=6770800&amp;saveit=Yes">Health / Safety / Nutrition for 10/25/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6770800&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6706705&amp;saveit=Yes" class="preview"><span id="img-wrapper-2646935"><img data-info="2646935-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaw68Py1SeFei.jpg" id="img2646935" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6706705"></a><a class="title" href="/cubby_view.html?entryid=6706705&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/19/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6706705&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6705669&amp;saveit=Yes" class="preview"><span id="img-wrapper-2645727"><img data-info="2645727-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaw6_MSxQeFei.jpg" id="img2645727" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6705669"></a><a class="title" href="/cubby_view.html?entryid=6705669&amp;saveit=Yes">Health / Safety / Nutrition for 10/19/16</a><br><b>Yummy lunch!</b> <a class="info" href="/cubby_view.html?entryid=6705669&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6705469&amp;saveit=Yes" class="preview"><span id="img-wrapper-2645596"><img data-info="2645596-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaw6_MydReFei" id="img2645596" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6705469"></a><a class="title" href="/cubby_view.html?entryid=6705469&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/19/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6705469&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6691120&amp;saveit=Yes" class="preview"><span id="img-wrapper-2642512"><img data-info="2642512-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaw64My9VeFei" id="img2642512" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6691120"></a><a class="title" href="/cubby_view.html?entryid=6691120&amp;saveit=Yes">Health / Safety / Nutrition for 10/18/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6691120&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6690412&amp;saveit=Yes" class="preview"><span id="img-wrapper-2641672"><img data-info="2641672-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaw67MClVeFei" id="img2641672" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6690412"></a><a class="title" href="/cubby_view.html?entryid=6690412&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/18/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6690412&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6690145&amp;saveit=Yes" class="preview"><span id="img-wrapper-2641285"><img data-info="2641285-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaw67NCZSeFei.jpg" id="img2641285" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6690145"></a><a class="title" href="/cubby_view.html?entryid=6690145&amp;saveit=Yes">Health / Safety / Nutrition for 10/18/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6690145&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6673876&amp;saveit=Yes" class="preview"><span id="img-wrapper-2635542"><img data-info="2635542-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawm_MypVeFei" id="img2635542" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6673876"></a><a class="title" href="/cubby_view.html?entryid=6673876&amp;saveit=Yes">Social / Emotional for 10/17/16</a><br><b>"Look at my block!"</b> <a class="info" href="/cubby_view.html?entryid=6673876&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6643034&amp;saveit=Yes" class="preview"><span id="img-wrapper-2624166"><img data-info="2624166-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawi-NyhReFei" id="img2624166" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6643034"></a><a class="title" href="/cubby_view.html?entryid=6643034&amp;saveit=Yes">Health / Safety / Nutrition for 10/13/16</a><br><b>I told him I had 15 mins of cuddles. he decided to spend it sleeping</b> <a class="info" href="/cubby_view.html?entryid=6643034&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6642277&amp;saveit=Yes" class="preview"><span id="img-wrapper-2623194"><img data-info="2623194-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawi5NydTeFei" id="img2623194" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6642277"></a><a class="title" href="/cubby_view.html?entryid=6642277&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/13/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6642277&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6639873&amp;saveit=Yes" class="preview"><span id="img-wrapper-2620838"><img data-info="2620838-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawi6Pi1feFei" id="img2620838" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6639873"></a><a class="title" href="/cubby_view.html?entryid=6639873&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/13/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6639873&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6639246&amp;saveit=Yes" class="preview"><span id="img-wrapper-2620410"><img data-info="2620410-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawi6Mi9XeFei" id="img2620410" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6639246"></a><a class="title" href="/cubby_view.html?entryid=6639246&amp;saveit=Yes">Social / Emotional for 10/13/16</a><br><b>Best friends!</b> <a class="info" href="/cubby_view.html?entryid=6639246&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6623578&amp;saveit=Yes" class="preview"><span id="img-wrapper-2614379"><img data-info="2614379-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawu-NSleeFei.png" id="img2614379" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6623578"></a><a class="title" href="/cubby_view.html?entryid=6623578&amp;saveit=Yes">Social / Emotional for 10/12/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6623578&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6611391&amp;saveit=Yes" class="preview"><span id="img-wrapper-2612453"><img data-info="2612453-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawu4MitUeFei.png" id="img2612453" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6611391"></a><a class="title" href="/cubby_view.html?entryid=6611391&amp;saveit=Yes">Health / Safety / Nutrition for 10/11/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6611391&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6610021&amp;saveit=Yes" class="preview"><span id="img-wrapper-2610997"><img data-info="2610997-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawu6PydQeFei.jpg" id="img2610997" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6610021"></a><a class="title" href="/cubby_view.html?entryid=6610021&amp;saveit=Yes">Social / Emotional for 10/11/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6610021&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6606938&amp;saveit=Yes" class="preview"><span id="img-wrapper-2608073"><img data-info="2608073-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawqyNilUeFei.png" id="img2608073" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6606938"></a><a class="title" href="/cubby_view.html?entryid=6606938&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/11/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6606938&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6595138&amp;saveit=Yes" class="preview"><span id="img-wrapper-2606518"><img data-info="2606518-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawq8My9feFei" id="img2606518" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6595138"></a><a class="title" href="/cubby_view.html?entryid=6595138&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/10/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6595138&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6590868&amp;saveit=Yes" class="preview"><span id="img-wrapper-2603905"><img data-info="2603905-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawq5Py5SeFei.png" id="img2603905" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6590868"></a><a class="title" href="/cubby_view.html?entryid=6590868&amp;saveit=Yes">Social / Emotional for 10/10/16</a><br><b>he loves the toy that makes noise!</b> <a class="info" href="/cubby_view.html?entryid=6590868&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6583236&amp;saveit=Yes" class="preview"><span id="img-wrapper-2602611"><img data-info="2602611-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawq4MC9WeFei.png" id="img2602611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6583236"></a><a class="title" href="/cubby_view.html?entryid=6583236&amp;saveit=Yes">Social / Emotional for 10/07/16</a><br><b>smile</b> <a class="info" href="/cubby_view.html?entryid=6583236&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6582030&amp;saveit=Yes" class="preview"><span id="img-wrapper-2601126"><img data-info="2601126-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawq7NyxReFei" id="img2601126" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6582030"></a><a class="title" href="/cubby_view.html?entryid=6582030&amp;saveit=Yes">Health / Safety / Nutrition for 10/07/16</a><br><b>having carrots and Banana!</b> <a class="info" href="/cubby_view.html?entryid=6582030&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6606938&amp;saveit=Yes" class="preview"><span id="img-wrapper-2608073"><img data-info="2608073-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawqyNilUeFei.png" id="img2608073" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6606938"></a><a class="title" href="/cubby_view.html?entryid=6606938&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/11/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6606938&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6595138&amp;saveit=Yes" class="preview"><span id="img-wrapper-2606518"><img data-info="2606518-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawq8My9feFei" id="img2606518" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6595138"></a><a class="title" href="/cubby_view.html?entryid=6595138&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/10/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6595138&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6590868&amp;saveit=Yes" class="preview"><span id="img-wrapper-2603905"><img data-info="2603905-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawq5Py5SeFei.png" id="img2603905" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6590868"></a><a class="title" href="/cubby_view.html?entryid=6590868&amp;saveit=Yes">Social / Emotional for 10/10/16</a><br><b>he loves the toy that makes noise!</b> <a class="info" href="/cubby_view.html?entryid=6590868&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6583236&amp;saveit=Yes" class="preview"><span id="img-wrapper-2602611"><img data-info="2602611-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFawq4MC9WeFei.png" id="img2602611" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6583236"></a><a class="title" href="/cubby_view.html?entryid=6583236&amp;saveit=Yes">Social / Emotional for 10/07/16</a><br><b>smile</b> <a class="info" href="/cubby_view.html?entryid=6583236&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6582030&amp;saveit=Yes" class="preview"><span id="img-wrapper-2601126"><img data-info="2601126-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawq7NyxReFei" id="img2601126" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6582030"></a><a class="title" href="/cubby_view.html?entryid=6582030&amp;saveit=Yes">Health / Safety / Nutrition for 10/07/16</a><br><b>having carrots and Banana!</b> <a class="info" href="/cubby_view.html?entryid=6582030&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6581719&amp;saveit=Yes" class="preview"><span id="img-wrapper-2600702"><img data-info="2600702-90-0" src="https://www.lifecubby.me/i/rmrmJYwFawq6MS5VeFei" id="img2600702" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6581719"></a><a class="title" href="/cubby_view.html?entryid=6581719&amp;saveit=Yes">Large Motor for 10/07/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6581719&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6567952&amp;saveit=Yes" class="preview"><span id="img-wrapper-2595661"><img data-info="2595661-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaAO_MChWeFei.jpg" id="img2595661" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6567952"></a><a class="title" href="/cubby_view.html?entryid=6567952&amp;saveit=Yes">Health / Safety / Nutrition for 10/06/16</a><br><b>clapping for watermelon! he loves it!</b> <a class="info" href="/cubby_view.html?entryid=6567952&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6564833&amp;saveit=Yes" class="preview"><span id="img-wrapper-2593020"><img data-info="2593020-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaAO5NixXeFei" id="img2593020" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6564833"></a><a class="title" href="/cubby_view.html?entryid=6564833&amp;saveit=Yes">Health / Safety / Nutrition for 10/06/16</a><br><b>friends having breakfast together!</b> <a class="info" href="/cubby_view.html?entryid=6564833&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6535970&amp;saveit=Yes" class="preview"><span id="img-wrapper-2583149"><img data-info="2583149-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaAK5NypeeFei.png" id="img2583149" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6535970"></a><a class="title" href="/cubby_view.html?entryid=6535970&amp;saveit=Yes">Health / Safety / Nutrition for 10/04/16</a><br><b>big boy! he is trying to pick it up and I'm giving him spoon full. he is doing good!</b> <a class="info" href="/cubby_view.html?entryid=6535970&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6535087&amp;saveit=Yes" class="preview"><span id="img-wrapper-2582079"><img data-info="2582079-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaAK4NileeFei.png" id="img2582079" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6535087"></a><a class="title" href="/cubby_view.html?entryid=6535087&amp;saveit=Yes">Fine Motor for 10/04/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6535087&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6519464&amp;saveit=Yes" class="preview"><span id="img-wrapper-2576937"><img data-info="2576937-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA28Py1QeFei.png" id="img2576937" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6519464"></a><a class="title" href="/cubby_view.html?entryid=6519464&amp;saveit=Yes">Approaches to Learning / Cognitive for 10/03/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6519464&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6503294&amp;saveit=Yes" class="preview"><span id="img-wrapper-2570365"><img data-info="2570365-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA26NShSeFei.png" id="img2570365" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6503294"></a><a class="title" href="/cubby_view.html?entryid=6503294&amp;saveit=Yes">Health / Safety / Nutrition for 09/30/16</a><br><b>being a big boy! he is loving it! just a little snack so he can sit with the other kids at the table </b> <a class="info" href="/cubby_view.html?entryid=6503294&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6487047&amp;saveit=Yes" class="preview"><span id="img-wrapper-2563503"><img data-info="2563503-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaAy5My5UeFei.png" id="img2563503" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6487047"></a><a class="title" href="/cubby_view.html?entryid=6487047&amp;saveit=Yes">Dramatic Play for 09/29/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6487047&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6487019&amp;saveit=Yes" class="preview"><span id="img-wrapper-2563479"><img data-info="2563479-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaAy5MileeFei.png" id="img2563479" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6487019"></a><a class="title" href="/cubby_view.html?entryid=6487019&amp;saveit=Yes">Dramatic Play for 09/29/16</a><br><b>Playing Outside</b> <a class="info" href="/cubby_view.html?entryid=6487019&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6471740&amp;saveit=Yes" class="preview"><span id="img-wrapper-2558126"><img data-info="2558126-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaA-yNyxReFei" id="img2558126" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6471740"></a><a class="title" href="/cubby_view.html?entryid=6471740&amp;saveit=Yes">Social / Emotional for 09/28/16</a><br><b>happy guy playing with friends</b> <a class="info" href="/cubby_view.html?entryid=6471740&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6471215&amp;saveit=Yes" class="preview"><span id="img-wrapper-2557848"><img data-info="2557848-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaA-9PipfeFei" id="img2557848" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6471215"></a><a class="title" href="/cubby_view.html?entryid=6471215&amp;saveit=Yes">Sensory for 09/28/16</a><br><b>having some paper fun!! exploring new textures</b> <a class="info" href="/cubby_view.html?entryid=6471215&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6458609&amp;saveit=Yes" class="preview"><span id="img-wrapper-2555795"><img data-info="2555795-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA-_MSdSeFei.png" id="img2555795" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6458609"></a><a class="title" href="/cubby_view.html?entryid=6458609&amp;saveit=Yes">Social / Emotional for 09/27/16</a><br><b>looking for friends outside!</b> <a class="info" href="/cubby_view.html?entryid=6458609&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6442449&amp;saveit=Yes" class="preview"><span id="img-wrapper-2549797"><img data-info="2549797-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA6zMSdQeFei.png" id="img2549797" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6442449"></a><a class="title" href="/cubby_view.html?entryid=6442449&amp;saveit=Yes">09/26/16</a><br><b>playing in the gym!</b> <a class="info" href="/cubby_view.html?entryid=6442449&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6442365&amp;saveit=Yes" class="preview"><span id="img-wrapper-2549731"><img data-info="2549731-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA6zMS1WeFei.png" id="img2549731" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6442365"></a><a class="title" href="/cubby_view.html?entryid=6442365&amp;saveit=Yes">09/26/16</a><br><b>fun in the gym</b> <a class="info" href="/cubby_view.html?entryid=6442365&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6438828&amp;saveit=Yes" class="preview"><span id="img-wrapper-2546081"><img data-info="2546081-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA68NiZWeFei.png" id="img2546081" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6438828"></a><a class="title" href="/cubby_view.html?entryid=6438828&amp;saveit=Yes">Social / Emotional for 09/26/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6438828&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6438779&amp;saveit=Yes" class="preview"><span id="img-wrapper-2546053"><img data-info="2546053-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaA68NitUeFei.png" id="img2546053" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6438779"></a><a class="title" href="/cubby_view.html?entryid=6438779&amp;saveit=Yes">Large Motor for 09/26/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6438779&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6409351&amp;saveit=Yes" class="preview"><span id="img-wrapper-2535948"><img data-info="2535948-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaAm_PypfeFei" id="img2535948" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6409351"></a><a class="title" href="/cubby_view.html?entryid=6409351&amp;saveit=Yes">Social / Emotional for 09/22/16</a><br><b>boys playing!</b> <a class="info" href="/cubby_view.html?entryid=6409351&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6376752&amp;saveit=Yes" class="preview"><span id="img-wrapper-2523716"><img data-info="2523716-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaAi5MS9ReFei" id="img2523716" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6376752"></a><a class="title" href="/cubby_view.html?entryid=6376752&amp;saveit=Yes">09/20/16</a><br><b>Playing with cups!</b> <a class="info" href="/cubby_view.html?entryid=6376752&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6374668&amp;saveit=Yes" class="preview"><span id="img-wrapper-2522501"><img data-info="2522501-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaAi4My5WeFei.png" id="img2522501" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6374668"></a><a class="title" href="/cubby_view.html?entryid=6374668&amp;saveit=Yes">Social / Emotional for 09/20/16</a><br><b>looking at the pics around the room!</b> <a class="info" href="/cubby_view.html?entryid=6374668&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6343066&amp;saveit=Yes" class="preview"><span id="img-wrapper-2511074"><img data-info="2511074-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaAu7NilTeFei" id="img2511074" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6343066"></a><a class="title" href="/cubby_view.html?entryid=6343066&amp;saveit=Yes">Social / Emotional for 09/16/16</a><br><b>big boys playing!</b> <a class="info" href="/cubby_view.html?entryid=6343066&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6283692&amp;saveit=Yes" class="preview"><span id="img-wrapper-2490412"><img data-info="2490412-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQO6Mi9VeFei" id="img2490412" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6283692"></a><a class="title" href="/cubby_view.html?entryid=6283692&amp;saveit=Yes">Music for 09/12/16</a><br><b>Making music with the rattle!</b> <a class="info" href="/cubby_view.html?entryid=6283692&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6270228&amp;saveit=Yes" class="preview"><span id="img-wrapper-2487056"><img data-info="2487056-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQK9NitReFei" id="img2487056" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6270228"></a><a class="title" href="/cubby_view.html?entryid=6270228&amp;saveit=Yes">Large Motor for 09/09/16</a><br><b>mr destruction throwing everything off the shelves.</b> <a class="info" href="/cubby_view.html?entryid=6270228&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6267613&amp;saveit=Yes" class="preview"><span id="img-wrapper-2483697"><img data-info="2483697-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaQK5MCdQeFei.png" id="img2483697" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6267613"></a><a class="title" href="/cubby_view.html?entryid=6267613&amp;saveit=Yes">Large Motor for 09/09/16</a><br><b>big man!!</b> <a class="info" href="/cubby_view.html?entryid=6267613&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6240546&amp;saveit=Yes" class="preview"><span id="img-wrapper-2475417"><img data-info="2475417-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaQ2_Mi9QeFei.png" id="img2475417" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6240546"></a><a class="title" href="/cubby_view.html?entryid=6240546&amp;saveit=Yes">Approaches to Learning / Cognitive for 09/07/16</a><br><b>big boy!!</b> <a class="info" href="/cubby_view.html?entryid=6240546&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6235454&amp;saveit=Yes" class="preview"><span id="img-wrapper-2470492"><img data-info="2470492-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQ26MidVeFei" id="img2470492" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6235454"></a><a class="title" href="/cubby_view.html?entryid=6235454&amp;saveit=Yes">Large Motor for 09/07/16</a><br><b>Big boy!</b> <a class="info" href="/cubby_view.html?entryid=6235454&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6225084&amp;saveit=Yes" class="preview"><span id="img-wrapper-2469205"><img data-info="2469205-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaQyzNC5SeFei.png" id="img2469205" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6225084"></a><a class="title" href="/cubby_view.html?entryid=6225084&amp;saveit=Yes">Fine Motor for 09/06/16</a><br><b>he likes the mail box!!</b> <a class="info" href="/cubby_view.html?entryid=6225084&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6210554&amp;saveit=Yes" class="preview"><span id="img-wrapper-2464426"><img data-info="2464426-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQy-MixReFei" id="img2464426" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6210554"></a><a class="title" href="/cubby_view.html?entryid=6210554&amp;saveit=Yes">09/02/16</a><br><b>attempt number 2 with puppy! lol</b> <a class="info" href="/cubby_view.html?entryid=6210554&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6207400&amp;saveit=Yes" class="preview"><span id="img-wrapper-2461050"><img data-info="2461050-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQy7NitXeFei" id="img2461050" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6207400"></a><a class="title" href="/cubby_view.html?entryid=6207400&amp;saveit=Yes">09/02/16</a><br><b>he did not want to hold still very long for his picture! haha!</b> <a class="info" href="/cubby_view.html?entryid=6207400&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6170636&amp;saveit=Yes" class="preview"><span id="img-wrapper-2448936"><img data-info="2448936-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQ6yPy1ReFei" id="img2448936" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6170636"></a><a class="title" href="/cubby_view.html?entryid=6170636&amp;saveit=Yes">08/30/16</a><br><b>we are trying corn, peaches, and baked beans today! he is a big fan of smashing the food and spreading it around the tray! </b> <a class="info" href="/cubby_view.html?entryid=6170636&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6170089&amp;saveit=Yes" class="preview"><span id="img-wrapper-2448334"><img data-info="2448334-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQ6yNS1TeFei" id="img2448334" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6170089"></a><a class="title" href="/cubby_view.html?entryid=6170089&amp;saveit=Yes">08/30/16</a><br><b>happy boy</b> <a class="info" href="/cubby_view.html?entryid=6170089&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6103531&amp;saveit=Yes" class="preview"><span id="img-wrapper-2426182"><img data-info="2426182-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQi8NyZVeFei" id="img2426182" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6103531"></a><a class="title" href="/cubby_view.html?entryid=6103531&amp;saveit=Yes">08/23/16</a><br><b>he loves the music toys!</b> <a class="info" href="/cubby_view.html?entryid=6103531&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6077173&amp;saveit=Yes" class="preview"><span id="img-wrapper-2417896"><img data-info="2417896-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQu9PidReFei" id="img2417896" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6077173"></a><a class="title" href="/cubby_view.html?entryid=6077173&amp;saveit=Yes">08/19/16</a><br><b>winner!!</b> <a class="info" href="/cubby_view.html?entryid=6077173&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6076562&amp;saveit=Yes" class="preview"><span id="img-wrapper-2417067"><img data-info="2417067-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaQu9NihQeFei.png" id="img2417067" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6076562"></a><a class="title" href="/cubby_view.html?entryid=6076562&amp;saveit=Yes">08/19/16</a><br><b>hi mom and dad! this is what I do when I'm supposed to be going to sleep. ;)</b> <a class="info" href="/cubby_view.html?entryid=6076562&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6063031&amp;saveit=Yes" class="preview"><span id="img-wrapper-2410785"><img data-info="2410785-90-0" src="https://bb07ec4c7156c660c816-91b75383b5b027fbd2cc2d74cf202d04.ssl.cf1.rackcdn.com/i/rmrmJYwFaQu6MSZSeFei.png" id="img2410785" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6063031"></a><a class="title" href="/cubby_view.html?entryid=6063031&amp;saveit=Yes">08/18/16</a><br><b>happy boy!</b> <a class="info" href="/cubby_view.html?entryid=6063031&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Tigers , Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6052691&amp;saveit=Yes" class="preview"><span id="img-wrapper-2408996"><img data-info="2408996-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQqyPydReFei" id="img2408996" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6052691"></a><a class="title" href="/cubby_view.html?entryid=6052691&amp;saveit=Yes">08/17/16</a><br><b></b> <a class="info" href="/cubby_view.html?entryid=6052691&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6048457&amp;saveit=Yes" class="preview"><span id="img-wrapper-2405620"><img data-info="2405620-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQq_MCxXeFei" id="img2405620" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6048457"></a><a class="title" href="/cubby_view.html?entryid=6048457&amp;saveit=Yes">08/17/16</a><br><b>he loves the phone!!</b> <a class="info" href="/cubby_view.html?entryid=6048457&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div>
<div class="entry">
<a href="/cubby_view.html?entryid=6039655&amp;saveit=Yes" class="preview"><span id="img-wrapper-2404530"><img data-info="2404530-90-0" src="https://www.lifecubby.me/i/rmrmJYwFaQq-My1XeFei" id="img2404530" class="niceimg" width="90"></span></a>
<div class="entry-details with-image"><a name="6039655"></a><a class="title" href="/cubby_view.html?entryid=6039655&amp;saveit=Yes">08/16/16</a><br><b>happy boy!! we had jar for at the big kid table today!</b> <a class="info" href="/cubby_view.html?entryid=6039655&amp;saveit=Yes" style="font-style:italic; font-size:12px;"><span class="posted"><span style="font-weight:bold;">Posted by</span> Vickie Brandenburg, Lionheart Early Learning</span></a></div>
</div></div>
`)

/* let list = []
$('div[id="entries"]').find('div.entry img').each(function (index, element) {
  if ($(element).attr('src') !== '/images/generic-observations.jpg') {
    list.push($(element).attr('src'));
  }  
})
console.dir(list) */

let list = []
$('div[id="entries"]').each(function (index, element) {
  let title = $(element).find('.title').text()
  let dates = extractDate(title)
  console.log(dates)
    //list.push($(element).attr('src'))
})
console.dir(list)

function extractDate(str) {
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
  let match = str.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)
  return match
}

