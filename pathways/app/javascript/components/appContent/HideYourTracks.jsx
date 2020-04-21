import React from 'react';
import AudioContent from '../AudioContent';

const cyberSafeURL = 'https://www.getcybersafe.gc.ca/cnt/rsrcs/pblctns/prtc-cnct/index-en.aspx';

export const getTitleIcon = (title, icon) => <div className='grid-x align-middle'>
    <div className='cell shrink margin-right-1'>
        <i className={`fa fa-${icon} fa-2x`}/>
    </div>
    <div className='cell shrink'>
        {title}
    </div>
</div>;

export default [
    {
        title: 'Deleting Cookies',
        description: <div>
            <p>Cookies are created by the sites you visit. They are designed to store information about your
            browsing activity such as the websites you visit or pieces of information you may have entered in fields
            such as names, passwords, and credit card numbers.  It is important to delete cookies when attempting
            to hide your tracks online.</p>
            <AudioContent path='hide_tracks/Hide your Tracks_Deleting Cookies_April15.mp3'/>
        </div>
    },
    {
        title: 'Clear your Cache',
        description: <div>
            <p>Most web browsers have a folder called the cache, where certain items that have been downloaded
            are stored for future use, to help open the browsers faster during your next visit. Caches typically
            include photo images and web page data files. Clearing your cache helps reduce chances of someone going
            through your computer and finding out what you’ve been reading and viewing.</p>
            <AudioContent path='hide_tracks/Hide your Tracks_Clear your Cache_April15.mp3'/>
        </div>
    },
    {
        title: 'Private browsing',
        description: <div>
            <p>This feature allows you to disable browsing history and clears web cache as you surf the
            internet. This is helpful if you think your partner might be going through your web history to track
            your activities online. Please note <b>this does not block any spyware</b> that might be installed on
            your computer from tracking your browsing history or stop your partner from peeking at your monitor
            over your shoulder.</p>
            <AudioContent path='hide_tracks/Hide your Tracks_Private Browsing_April15.mp3'/>
        </div>
    },
    {
        title: 'Do not track (DNT)',
        description: <div>
            <p>Do not track is an in-browser feature that can be enabled when the user does not want their
            activity to be tracked by third- party, such as advertisers on websites you might visit.
            While you can convey your preference to not being tracked online, the advertisers may or may not honor
            your wishes as there are no legal or technological requirements for the use of the
            Do Not Track (DNT) feature.</p>
            <AudioContent path='hide_tracks/Hide Your Tracks_Do not Track_April15.mp3'/>
        </div>
    },
    {
        title: 'In - browser settings',
        description: <div>
            <p>
                Select the browser you use to find out more about browsing privately and increasing your security online:
            </p>
            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_April16.mp3'/>
        </div>,
        tabs: [
            {
                title: getTitleIcon('Google chrome', 'chrome'),
                description: <div>
                    <ol>
                        <li>
                            <p>Private browsing: Incognito Mode:<br/>To enable private browsing called ‘incognito’ mode
                                on Google chrome, do the following:</p>
                            <ul>
                                <li>Open a new window and click on the <b>Chrome Menu</b> icon at the top right corner
                                    of your screen.</li>
                                <li>Click on the <b>‘new incognito window’</b> OR press Ctrl + Shift + N to launch
                                    the incognito window.</li>
                                <li>Your activity will not be tracked and you will remain incognito till you close
                                    this browser window.</li>
                                <li>Please note that while your activity will not be tracked, anything you download or
                                    bookmark will be saved on your computer, unless you delete it yourself.</li>
                            </ul><br/>
                            <img className='float-center' src='/hideYourTracks/chrome.png'/><br/>
                            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_Google chrome_Step 1_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Do not track:</p>
                            <ul>
                                <li>To activate this feature, click on the <b>Chrome</b> Menu in the top
                                    right corner of your screen.</li>
                                <li>
                                    Choose <b>‘Settings’</b>. Click on <b>‘Advanced’</b> at the bottom of the page.
                                    Click on <b>“Send a ‘Do Not Track’ request with your browsing traffic”</b> under
                                    <b> Privacy and security.</b></li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_Google chrome_Step 2 do not track_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Clear your history:</p>
                            <ul>
                                <li>Click on <b>Chrome Menu</b> in the top right corner of the screen.</li>
                                <li>Click on <b>History</b> (Ctrl + H). You can clear your browsing history from here.
                                    You can clear your entire browsing history or you can choose to delete
                                    certain pages.</li>
                                <li>It is recommended that you delete your browsing history regularly to increase your
                                    privacy and to avoid making your partner (who may be monitoring your
                                    activity online) suspicious.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_Google chrome_Step3_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Clear cache and cookies:</p>
                            <ul>
                                <li>Open Chrome and click the Menu icon at the top right corner of the screen.</li>
                                <li>Click on <b>‘More tools’</b>. Now click on <b>‘Clear browsing history’</b>.</li>
                                <li>At the top, choose a time range. To delete everything, select All time.</li>
                                <li>Next to <b>“Cookies and other site data“</b> and <b>“Cached images and files,“ </b>
                                    check the boxes.</li>
                                <li>Click Clear data.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_google chrome_Step4_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Options for additional online security:<br/><br/>
                            If you don’t want to save your passwords and credit card information to your computer,
                                click on the <b>Menu</b> icon at the right corner of the screen. Click on <b>Settings</b>. You can now
                            customize your settings depending on if you want to save your passwords and credit card
                                information to your computer.</p><br/>
                            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_google chrome_step5_April16.mp3'/>
                        </li>
                    </ol>
                </div>
            },
            {
                title: getTitleIcon('Internet explorer', 'internet-explorer'),
                description: <div>
                    <ol>
                        <li>
                            <p>In private browsing: InPrivate Browsing</p>
                            <ul>
                                <li>Open a new window and click on the <b>Menu icon</b> in the top right corner.</li>
                                <li>Click on <b>‘Safety’</b> and select <b>‘InPrivate Browsing’</b>. </li>
                            </ul>
                            <ul>A new window will pop-up and will explain what it means to browse InPrivate.
                                Your activity will not be tracked in this window.</ul>
                            <img src='/hideYourTracks/internet-explorer.png'/><br/>
                            <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_Internet Exploror_Step1_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Do not track:</p>
                            <ul>
                                <li>Click on the <b>Tools icon</b> in the top right corner of the screen.</li>
                                <li>Click on the <b>‘Internet Options’</b> menu selection located at the
                                    bottom of the drop-down menu.</li>
                                <li>Now click on <b>Advanced menu</b> in the top right corner of the pop-up menu.</li>
                                <li>Check the box that says, <b>‘Send Do Not Track requests to sites
                                    you visit in Internet Explorer’</b>.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your tracks_In browser settings_Internet Exploror_Step 2_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Clear your history:</p>
                            <ul>
                                <li>Click on the <b>Tools icon</b> in the top right corner of the screen.</li>
                                <li>Click on <b>Internet Options;</b> under the <b>‘General’</b> category you can
                                    select to delete your browsing history on exit, if you prefer.</li>
                                <li>You can also delete your browsing history by clicking on the <b>‘Delete browsing
                                    history’</b> (or press Ctrl + Shift + Delete) under the <b>‘Safety’ icon</b>.
                                    You can select the checkbox to <b>delete Cookies</b> here as well.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your tracks_In browser settings_Internet Exploror_Step3_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Options for additional online security:</p>
                            <ul>
                                <li>If you click on the <b>Tools icon</b>, followed by a click on the <b>‘Internet
                                    Options’</b> at the bottom of the drop down menu, you can chose the option
                                    of <b>‘Privacy’</b> there.<br/><br/>Under ‘Privacy’ you have a few options to
                                    increase your privacy while browsing online, for example <b>blocking cookies</b>.
                                    Go through them and see what suits you better.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your tracks_in browser settings_Internet Exploror_Step4_April16.mp3'/>
                        </li>
                    </ol>
                </div>
            },
            {
                title: getTitleIcon('Safari', 'safari'),
                description: <div>
                    <ol>
                        <li>
                            <p>Private browsing:</p>
                            <ul>
                                <li>To enable private browsing, click on the <b>‘File’</b> icon in top left corner
                                    of the screen. Now click on <b>‘New Private Window’</b>. This will launch a window
                                    where you can browse privately.</li>
                            </ul>
                            <img src='/hideYourTracks/safari.png'/>
                        </li><br/><br/>
                        <li>
                            <p>Do not track:</p>
                            <ul>
                                <li>This is a new feature in safari 6. Pull down the Safari menu and
                                    open <b>‘Preferences’</b>.</li>
                                <li>Click the <b>‘Privacy’</b> tab and look for <b>Website tracking</b>. Check the box
                                    that says <b>‘Ask websites not to track me’</b>.</li>
                            </ul>
                        </li><br/><br/>
                        <li>
                            <p>Clear your history:</p>
                            <ul>
                                <li>Click on the <b>‘History’</b> icon at the top left of the screen.</li>
                                <li>Click on <b>Show full history</b> at the bottom of the drop-down menu.
                                    You can now clear your entire browsing history OR select certain pages that
                                    you would like to remove and delete them.</li>
                            </ul>
                        </li>
                    </ol><br/>
                    <AudioContent path='hide_tracks/Hide your Tracks_In browser settings_Safari_April16.mp3'/>
                </div>
            },
            {
                title: getTitleIcon('Mozilla Firefox', 'firefox'),
                description: <div>
                    <ol>
                        <li>
                            <p>Private browsing:</p>
                            <ul>
                                <li>Open a new window and click on the <b>Menu icon</b> in the top right corner.</li>
                                <li>Click on <b>‘New Private Window’</b>. A new window will pop- up explaining the
                                    private browsing option. You can safely browse in this window.</li>
                            </ul>
                            <img src='/hideYourTracks/firefox.png'/><br/><br/>
                            <AudioContent path='hide_tracks/Hide your tracks_In browser settings_Mozilla Foxfire_Step1_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Do not track:</p>
                            <ul>
                                <li>Click on <b>‘History’</b> icon in the middle, at the bottom of the page. Select
                                    and delete the websites you wish to delete from your browsing history.</li>
                                <li>If you want to clear your browsing history automatically on exit, you can
                                    preset Firefox to do so.</li>
                                <li>Click on the <b>‘Menu’</b> icon at the top right corner of the page.
                                    Select <b>‘Preferences’</b>. Go to <b>‘Privacy’</b> and in the drop down menu
                                    next to Firefox, select <b>‘Never Remember History’</b>.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your tracks_In browser settings_Mozilla Foxfire_Step2_April16.mp3'/>
                        </li><br/><br/>
                        <li>
                            <p>Deleting cookies and clearing caches:</p>
                            <ul>
                                <li>Click on history icon in the middle at the bottom of the page. Check boxes to
                                    select what information you want to clear from your history, e.g. Cookies,
                                    Cache, Active Logins, etc.</li>
                            </ul><br/>
                            <AudioContent path='hide_tracks/Hide your tracks_In browser settings_Mozilla Foxfire_Step3_April16.mp3'/>
                        </li>
                    </ol>
                </div>
            }
        ]
    },
    {
        title: 'Additional tips for online safety',
        description: <div>
            <p>The following are some additional tips you could consider taking to increase your safety and
                privacy online.<br/><br/><b>Creating safe usernames, passwords and email IDs</b></p>
            <ul>
                <li>Create usernames and emails that do not contain any identifying information such as your name or
                    date of birth. Be careful with the usernames you use on social media.</li>
                <li>Think carefully when signing up for new accounts, try to fill in only the required fields.
                    Try not to give out any extra information.</li>
                <li>Create passwords that contain at least 12-15 characters and include numbers, letters and
                    symbols.</li>
                <li>Use different passwords for different accounts, especially those that contain
                    sensitive information.</li>
                <li>When installing new apps and the app asks to connect with your contacts, click ‘no’.</li>
                <li>Always remember to sign out/ log out on whichever device you are using if you don’t want
                    the device to remember you.</li>
                <li>Remember once you upload something on the internet, it’s out there. You cannot erase it
                    completely once it’s out in the cyber world.</li>
                <li>Although it is difficult to remember passwords to different accounts, try not to write them down
                    anywhere as that increases the chances someone else will find your passwords.</li>
            </ul>
            <br/>
            <AudioContent path='hide_tracks/Hide your Tracks_Additional Tips_Creating safe usernames_April15.mp3'/>
            <br/>
            <p><b>Tips around the use of Social Media:</b></p>
            <ul>
                <li>Be careful of the content you make public on the social media. Check your friends list often to
                    ensure you don’t have people you don’t know on your friends list.</li>
                <li>When using social media, be mindful of the fact that the picture or content your friends
                    like can be viewed by their friends too.</li>
                <li>If you want to keep your location private, avoid “checking in” to places on apps like Facebook or
                    Instagram. Turn off location services on your cell phone. Talk to your
                    children about this as well.</li>
                <li>Read the privacy policy on social media such as Facebook, Instagram, Snapchat, Twitter
                    and others.</li>
                <li>Talk to your friends and family about what they can and cannot post about you online.</li>
            </ul>
            <br/>
            <AudioContent path='hide_tracks/Hide your Tracks_Additional tips for online safety_Tips for social media_April15.mp3'/>
            <br/>
            <p>
                The following link lists some useful advice on how to stay safe online.
                If you wish to find out more, please
                visit <a href={cyberSafeURL}>this link.</a></p>
        </div>
    }
];