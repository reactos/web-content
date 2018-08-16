---
title:       "Controlling (not just) Ctrl+C"
author:      "vicmarcal"
type:        blog
date:        2016-08-13
draft:       false
promote:     false
sticky:      false
url:         /blogs/controlling-not-just-ctrlc
aliases:     [ node/14387 ]

---

<p>Probably one of the funniest moments while developing is when you realize that something that "looks easy" is not as straight forward as it seemed at first sight.</p>
<p>The task was "really easy": Just creating a console app which (1)loops infinitely, (2)doing some tasks and (3) which breaks when the user decides to stop it (4)printing some valuable info before exiting.</p>
<p><i>"Naaah, this is easy. I just need a while/for/do-while/whatever infinite loop, a printf message asking the user to press a specific key to stop it, then a getch() to capture the key in order to break/stop the loop, and finally another printf to print the valuable info: PROFIT!"</i>...2 minutes, or not?</p>
<p>The skeleton of your first mental approach could be something similar as the following one (you can find all the code in the<a href="https://github.com/vicmarcal/ReactOS/tree/master/CtrlHandler"> CtrlHandler folder</a> of my GitHub).</p>
<script src="https://gist.github.com/vicmarcal/2de21b8f7f69bb6f944e53606bca53d6.js"></script>

<p>Maybe you've already noticed it (or if not, you will, as soon as you try to run it) but this app won't work. Or better said, it won't work as we expect.</p>
<p> Keep 2 or 3 minutes the app running, then press "5" (ASCII code 53). You could be expecting <i>dCount</i> to be about 120-180 (since the loop takes about 1 second because the Sleep). However the result is zero. </p>
<p> Try running it again, this time press 2, then 4, then 6, and finally our magic number "5". The result is: 3 </p>
<img src="/sites/default/files/imagepicker/14095/Screenshot_8.png" alt="Image"  class="imgp_img" width="750" height="196" />   
<p><br/>Basically what is happening is that our loop is not looping at all. When the <i>getchar()</i> call happens, the app will <b>sit there</b> staring you with its lovely catty eyes <b>waiting</b> a key to be pressed and, the best of all, blocking the loop execution until, of course, you press a key. Then and just then the while body is executed if the key pressed is not 5.</p>
<p>In other words: We will need to press a key <b>once per loop</b>. Not even close about what we want to do.</p>
<p>Then the getchar() dance starts: the call is moved to the top of the loop, then to the bottom, then to the conditional part of the loop, then above the loop(in a desperate move), then again to the body of the loop(because obviously outside of it hasn't help at all). Nothing works.<p>
<p>
	<i>"Oh,ok,lets change the getchar() logic to stop the loop by pressing ANY key".</i><br/> Cool. Now the app just loops once, it requests a key press to continue and of course...it stops there because you will press ANY key.</p>
<p><i>"This should be easy"</i>. We breath now for the first time since the endless dance of CTL+X-CTRL+V-F7-ALT+TAB-UP-ENTER started. <br/> <br/><i>"The problem is getchar() itself. It blocks. I want the same but non-blocking, accepting my key press input at any time during the loop, going on execution if I didnt press any".</i><br/>
We scratch our head trying to find the name of such function call. And we dont find it.</p><p>
	<i>"This should be easier than that..or, wait...(now the developer rage appears)... I can create an app with two threads, one for capturing user input, other for looping. It won't be easy anymore but it will work for sure."</i></p>
<p>Not a bad solution. But if we are over-engineering it, let me use this problem to show you a nice trick.</p>
<p>As you may know, if you press CTRL+C in the console while you are executing a program, this combination will kill inmediatly its execution.<br/><br/>
	<b>The good news</b>: To begin with you don't need to add any getchar() or special code to handle the CTRL+C key press so we can let the app to loop wildly doing some tasks and tell the user to press CTRL+C when he wants to stop it. So requirements (1), (2) and (3) are covered without writing a single line of code.<br/><br/>
	<b>The bad news</b>: CTRL+C kills immediately the program. That means requirement (4) is not met. We wouldn't be able to print, ie, the number of loops done. Also this kill is so rude, that we could end with files corrupted(if the loop was working with them) or we may have left some temporary files around that should have been deleted at the end of the program.</p>
<h4> From Dr Jekyll to Mr Hide  </h4>
<p>So what if we could handle this CTRL+C to <b> NOT </b> kill inmediatly the program but to do that in a controlled way? <br/>For such we will be using the <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/ms686016(v=vs.85).aspx">SetConsoleCtrlHandler</a> API. This API receives two params, the first one is the name of a function that will define the new behavior of CTRL+C (I've named it SignalHandler in my code) and a second one, which acts as a switch. <br/> Let's look first this second param: If the value is TRUE, the behavior of CTRL+C will follow the one defined in the function SignalHandler. If it is FALSE, SignalHandler is "deactivated", and the CTRL+C will act again as a rude killer. This switch could be useful, then, to turn on/off the CTRL+C behavior dynamically from Dr Jekyll to Mr Hide as our wish.  
Check the following code. Explanation follows:</p>
<script src="https://gist.github.com/vicmarcal/c893b15e7083d250d0fdecbe2932dc1d.js"></script>
<p> Regarding the SignalHandler there are just two must haves: The function has to return a BOOL and to accept one param. The SetConsoleCtrlHandler API basically will send to it the CTRL_C_EVENT when the user presses CTRL+C. Of course it is not the only message that this API will/can send to our function, so the easiest way is to <b>check which one we're receiving</b> by using a switch-case inside our SignalHandler implementation . More about other messages later. Our switch-case is pretty tiny, it just modifies a global variable called <i>exitFlag</i>, which controls the infinite loop in our main body. But of course you could be calling other functions or performing other steps. To sum up <b>you can redefine the Ctrl+C behavior</b> as you wish. We should return TRUE to let it know we're modifying the signal behavior</p>
<p>As said, the SetConsoleCtrlHandlerAPI doesn't just send the CTRL_C_EVENT but will redirect to our SignalHandler some others. In the previous example we've just ignored all the others so the console will keep their default behaviors and just override the Ctrl+C one. If the user would have pressed CTRL+BREAK which is, as you may know, another way to kill rudely a console app, our app would have been rudely killed.<br/>
<img src="/sites/default/files/imagepicker/14095/CtrlHandler2.png" alt="Image"  class="imgp_img" width="717" height="290" />
<p>Of course we can control and redefine the CTRL+BREAK behavior too as you can see in the image above, for such we have just to manage the CTRL_BREAK_EVENT in our function. Other messages we can handle are <b>CTRL_CLOSE_EVENT, CTRL_LOGOFF_EVENT and CTRL_SHUTDOWN_EVENT</b>. The first one is sent ("happens") when the user closes the console window (a neat way to kill the app running). In this case we can't abort the closing action but handling the message will let us to perform any tasks before being closed. In other words, we won't let the closing happens until the app ends its work. The CTRL_LOGOFF_EVENT  message will happen when the user logs off, so handling the message will give you a last chance before logging off happens (this signal is useful just for services). In the following example I'm controlling some of these signals.</p>

<h4>Being immune to Mr Hyde </h4>
<p> As always some APIs have some nice features hidden. This is the case of SetConsoleCtrlHandler. As explained this API expects as first param the name of a function, however, we can feed it with "NULL" (why not?). <br/>
In such case, CTRL+C signal WILL NEVER be sent to our app!. So our app will be <b>immune to be killed via CTRL+C</b> (however it can still be killed by CTRL+Break). A nice sup3rpow3r. 
<br/>In the case we want be inmune to CTRL+C but still handle the rest of the signals we have just to call SetConsoleCtrlHandler twice: one with SignalHandler as param and one with the NULL one.</p>
<script src="https://gist.github.com/vicmarcal/190bd275471ddf421305903a37f7ab3b.js"></script>

<p> One detail: As you can see I've placed the SetConsoleCtrlHandler() with SignalHandler param <b>above</b> the SetConsoleCtrlHandler() with NULL param call. As you can see SignalHandler function tries to catch the CTRL+C signal, but it never prints the <i>"CTRL+C can't be never received"</i> message. So basically at that time the CTRL+C signal is <b>already</b> deactivated, even if it is the first call, because the existence of a SetConsoleCtrlHandler() with NULL param.</p>

<p> You can find a binary ready to be tested in the <a href="https://github.com/vicmarcal/ReactOS/tree/master/CtrlHandler/Bin">bin</a> folder of the Github repo. The <a href="https://github.com/vicmarcal/ReactOS/tree/master/CtrlHandler/Source">Source folder</a> contains the source code of this latest version, and the <a href="https://github.com/vicmarcal/ReactOS/tree/master/CtrlHandler/Replace%26Try">Replace&Try folder</a> has the previous versions of the app so you can just replace the file and compile. Feel free to play with it and send new versions of the file.</p>

<h4>TLTR;</h4>
<p>Just using the excuse of breaking an infinite loop in a console app when an user desires we've ended studying SetConsoleCtrlHandler. This API opens doors to a lot of interesting features as controlling signals like CTRL+C or CTRL+BREAK as user input, calling cleanup routines just before exiting to avoid left overs, or even making our console app immune to the CTRL+C signal.</p>

<h4> BONUS </h4>
<p> If you want to exit the loop in the original problem when an user presses any key without controlling CTRL+C as we did,  you may want to give a look to the _kbhit() function. If you want to break the loop with a specific key, you could combine_kbhit and getchar calls.. Just an advise: Good luck managing the Enter key.
