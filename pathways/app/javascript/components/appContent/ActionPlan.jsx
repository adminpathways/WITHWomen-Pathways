import Tooltip from '../ToolTip';
import {Link} from 'react-router-dom';
import React from 'react';
import {financePath, healthPath, housingPath, legalPath, safetyPlanPath, socialSupportPath} from '../routes';
import AudioContent from '../AudioContent';
import {setSafetyPlan} from '../../reducers/assessment';
import {push} from 'react-router-redux';

const actionPlansHelpText = <p>If you have any questions or need help, call the Assaulted Women’s Helpline 1-866-863-0511 at any
    time.
</p>;

const entrepreneursURL = 'http://www.women.gov.on.ca/owd/english/economic/entrepreneurs.shtml';
const financialEmpowermentURL = 'https://www.woodgreen.org/services/programs/financial-empowerment-self-help-resources/';
const schliferclinicURL = 'https://schliferclinic.com/how-we-can-help/intake/';
const oasisfemmesURL = 'http://www.oasisfemmes.org/soutien-a-la-cour-familiale/';
const attorneygeneralURL = 'https://www.attorneygeneral.jus.gov.on.ca/english/ovss/' +
    'family_court_support_worker_program/service_providers.php';
const legalAidURL = 'https://www.legalaid.on.ca';
const legalClinicsURL = 'https://www.legalaid.on.ca/legal-clinics';
const peaceBoundsURL = 'https://www.metrac.org/new-infographic-on-peace-bonds/';
const restrainingOrderURL = 'https://www.metrac.org/tag/restraining-order/';
const refugeeLegalURL = 'http://www.immigrantandrefugeenff.ca/need-help/legal-protection';
const refugeeSettleURL = 'http://www.immigrantandrefugeenff.ca/sites/d7nff.settlementtech.org/files/famvio.pdf';
const northYorkURL = 'https://nywc.org/';
const rexdaleCentreURL = 'http://www.rexdalewomen.org/programs/programsAndServices-ViolencePrevention.html';
const familyServiceURL = 'https://familyservicetoronto.org/our-services/programs-and-services/violence-against-women/';
const scarboroughCentreURL = 'http://www.scarboroughwomenscentre.ca/counselling/';
const barbraSchliferURL = 'http://schliferclinic.com/services/counselling/';
const abrigoCenreURL = 'http://www.abrigo.ca/services/vaw/';
const workingwomenURL = 'http://www.workingwomencc.org/location/fairview/programs-services/programs-services/' +
    'womens-support-services/';
const findHealthCentre = 'https://www.allianceon.org/find-a-centre';
const consentedURL = 'http://www.consented.ca/consent/coercion/';
const sexualClinics = 'https://www.toronto.ca/community-people/health-wellness-care/health-clinics/sexual-health-' +
    'clinics/';
const dcontario = 'http://dcontario.org/ontx.html';
const shelterSafeURL = 'https://www.sheltersafe.ca/';
const housingConnectionsURL = 'https://www.housingconnections.ca/';
const priorityProgramURL = 'https://www.toronto.ca/community-people/employment-social-support/' +
    'housing-support/rent-geared-to-income-subsidy/survivors-of-domestic-abuse-or-human-trafficking/';
const schliferclinicHousingURL = 'https://schliferclinic.com/services/counselling/transitional-and-housing-support/';
const zoloURL = 'https://www.zolo.ca';
const lawSecurityURL = 'https://lsrs.lso.ca/lsrs/welcome';
const ywcaURL = 'https://ywcacanada.ca/';
const tenantsGuideURL = 'http://www.scarboroughwomenscentre.ca/wp-content/uploads/2016/03/Housing-Pamphlet-for-Website.pdf';
const benefitFinderToolURL = 'https://www.toronto.ca/community-people/employment-social-support/benefit-finder-tool/#0';

const actionPlanContent = dispatch => ({
    [housingPath]: {
        title: 'Housing',
        topMyConcernText: 'Housing is at the top of your list.',
        topDescription: <div>
            <p>See below for some steps you can take to address housing
            concerns. Remember, you don’t need to take all of these steps at once. Go at your own pace and
            do what feels right for you.</p>
            <AudioContent path='action_plans/Action Plans_Housing_Text above the tabs_April17.mp3'/></div>,
        tabs: [{
            title: 'Find Out About Emergency Housing',
            description: <div>
                <p>There are shelters across Canada that help women and their children seek safety from violence.
                    Shelters offer safe places to stay, hot meals, and support to find permanent housing.</p>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Shelter Safe</b></td>
                            <td><div>
                                <ul>
                                    <li>Explore <Tooltip description={`<a href='${shelterSafeURL}'>${shelterSafeURL}</a>`} title='this online tool'/> and learn more about shelters in Canada.</li>
                                    <li>Note some shelters that you might stay at and their phone numbers.</li>
                                    <li>Call some shelters to find out how they can help you.</li>
                                </ul>
                            </div></td>
                        </tr>
                        <tr>
                            <td><b>City of Toronto Central Intake Line</b></td>
                            <td><div>
                                <p>If you live in or near Toronto, call 1-877-338-3398 at any time if you need information about
                                    shelters and other resources.</p>
                            </div></td>
                        </tr>
                    </tbody>
                </table><br/>
                <AudioContent path='action_plans/Action Plan_Housing_Find out about emergency housing_April17.mp3'/>
            </div>
        }, {
            title: 'Find a New Home',
            description: <div>
                <p>There are housing options for people who cannot afford to pay rent. If your income is low enough,
                    you can apply for rent-geared-to-income housing or a portable housing benefit to help you
                    afford rent.</p>
                <ul>
                    <li>If you live in Toronto, start on your
                        application <Tooltip description={`<a href='${housingConnectionsURL}'>${housingConnectionsURL}</a>`} title='here'/></li>
                    <li>To get help with housing in Ontario, call the Housing Help Association of
                        Ontario (416-686-3390)</li>
                </ul>

                <p>There is a special program to help people who
                        want to leave a home they share with an abusive (ex-)partner. If you apply for this
                        program, you will need a lot of proof about your situation and help from a professional.</p>
                <ul>
                    <li>Read about
                        the <Tooltip description={`<a href='${priorityProgramURL}'>${priorityProgramURL}</a>`} title='Special Priority Program'/> and
                    decide if it is a good fit for you</li>
                    <li>Call the Assaulted Women’s Helpline and
                        ask them to connect you with someone who can help</li>
                </ul>
                <p>The Transitional Housing Support Program at the Barbra Schlifer Commemorative
                        Clinic supports women who have experienced abuse as they transition into their new lives.</p>
                <ul>
                    <li>Read about the
                        program <Tooltip description={`<a href='${schliferclinicHousingURL}'>${schliferclinicHousingURL}</a>`} title='here'/></li>
                    <li><Tooltip description='If you are not able to call, please fill out an online intake form. A counsellor will
                    contact you as soon as possible between Monday-Friday, 9 a.m. to 5 p.m' title='Talk to an intake counsellor'/> at
                    the clinic to see how they can help you: 416-323-9149 ext. 234</li>
                </ul>
                <p>If you are looking for places to buy or rent at market
                    rates <Tooltip description={`<a href='${zoloURL}'>${zoloURL}</a>`} title='click here'/>.</p>
                <AudioContent path='action_plans/Action Plan_Housing_Find a New Home_April17.mp3'/>
            </div>
        }, {
            title: 'Learn About Your Housing Rights',
            description: <div>
                <p>
                    If you are renting a place in Ontario, you’re covered by the Residential Tenancies Act (RTA).
                    This law governs relations, rights, and obligations between landlords and tenants.
                    If your landlord does not follow RTA rules, you may apply to the Landlord and Tenant
                    Board to settle disputes.<br/><br/>
                    The Ontario Human Rights Code bans discrimination in most rental situations. For example, a
                    landlord cannot ask you questions that can be used to discriminate against you,
                    like your marital status, religion, ethnicity, sexual orientation, or citizenship.<br/><br/>
                    <b>To learn more, check out
                        the <Tooltip description={`<a href='${tenantsGuideURL}'>${tenantsGuideURL}</a>`} title='Tenant’s Guide to Housing'/> created
                    by the Scarborough Women’s Centre.</b>
                </p>
                <AudioContent path='action_plans/Action Plan_Housing_Learn about your housing rights_April17.mp3'/>
            </div>
        }],
        bottomDescription: actionPlansHelpText
    },
    [financePath]: {
        title: 'Finances',
        topMyConcernText: '',
        topDescription: <div><p>
            Finances are at the top of your list. See below for some steps you can take to address your
            financial concerns. Remember, you don’t need to take all of these steps at once. Go at your own pace
            and do what feels right for you.</p>
        <AudioContent path='action_plans/Action Plan_Finances_Text above and below tabs_April17.mp3'/>
        </div>,
        tabs: [{
            title: 'Hide Away Some Money',
            description: <div>
                <p>You might find it helpful to save money for yourself so you don’t have to rely on your partner.
                    This could be hard if your partner is very controlling about finances, but there are ways you
                    can save very small amounts of money.</p>
                <ul>
                    <li>Think of a safe place where you can hide cash. Consider sneaking money into a tampon box or some
                        place your partner won’t think to look.</li>
                    <li>If your partner is controlling about checking receipts and the money you spend, you can
                        purchase small items like bottles of shampoo and then return them for cash.</li>
                    <li>Consider having someone you trust hold on to the cash that you save.</li>
                    <li>
                        <Tooltip description='“Did you know that according to the law, you have the
                        right to open a personal bank account? You have this right, even if you don’t have a job or
                        money to put in your account. You can contact any bank or credit union to do this. All you
                        need are two pieces of I.D, including one with your photo on it”'
                        title='Consider opening a bank account'/> in your name or in the name of someone
                        else you trust.
                    </li>
                </ul>
                <AudioContent path='action_plans/Action Plans_Finances_Hide away some money_April17.mp3'/>
            </div>
        }, {
            title: 'Sign Up for Social Services & Benefits',
            description: <div>
                <p>There are programs to help people who are in financial need. These programs can
                    help you with child care, housing, employment, and money to pay for costs of daily living.</p>
                <ul>
                    <li>Use <Tooltip description={`<a href='${benefitFinderToolURL}'>${benefitFinderToolURL}</a>`} title='the Toronto Service and Benefit Finder Tool'/> to find a list of programs that might be right for
                        you.</li>
                    <li>Explore your list and note programs you are interested in.</li>
                    <li>When you are ready, you can follow the instructions and fill out the applications.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Finances_Sign up for social services and benefits_April17.mp3'/>
            </div>
        }, {
            title: 'Get Help with Financial Literacy and Job Skills',
            description: <div>
                <p>There are places across Toronto where you can get information,
                    training, and support to build financial skills and meet with other people who are addressing
                    their financial concerns.</p>
                <p>Employment and Training Programs at the YWCA:</p>
                <ul>
                    <li>The <Tooltip description={`<a href='${ywcaURL}'>${ywcaURL}</a>`} title='YWCA'/> provides
                    English classes, help finding a job, skill building, and more.</li>
                </ul>
                <p>Financial Empowerment Counseling</p>
                <ul>
                    <li>
                        To receive help with budgeting, banking, and managing debt book an appointment with a counsellor at <Tooltip description={`<a href='${financialEmpowermentURL}'>${financialEmpowermentURL}</a>`} title=' Wood Green Community Services'/> by
                        calling 416-645-6000 ext. 1330 or emailing fe@woodgreen.org</li>
                </ul>
                <p>Microlending Programs</p>
                <ul>
                    <li>Microlending programs help women start their own businesses by providing training and mentoring about
                        finances and life skills. See if there is a program near you by clicking <Tooltip description={`<a href='${entrepreneursURL}'>${entrepreneursURL}</a>`} title='here'/>.
                    </li>
                </ul>
                <AudioContent path='action_plans/Action Plans_Finances_Get help with financial literacy and job skills_April17.mp3'/>
            </div>
        }],
        bottomDescription: <div>
            {actionPlansHelpText}
            <p>
                As Your finances are likely linked to your <Link to={housingPath}>housing situation</Link> and your
                <a onClick={() => {
                    dispatch(setSafetyPlan([4]));
                    dispatch(push(safetyPlanPath));
                }}>  employment situation</a>, you may
                 find it helpful to explore other parts of this website.
            </p>
        </div>
    },
    [healthPath]: {
        title: 'Health',
        topMyConcernText: 'Health is at the top of your list.',
        topDescription: <div><p>See below for some steps you can take to address your
            health related concerns. Remember, you don’t need to take all of these steps at once. Go at your own pace
            and do what feels right for you.</p>
        <AudioContent path='action_plans/Action Plans_Health_Text at top and botton of tabs_April17.mp3'/></div>,
        tabs: [{
            title: 'Connect with a Community Health Centre',
            description: <div>
                <p>Community Health Centres provide access to healthcare workers, and offer diverse programs to address
                     your health and well-being.</p>
                <p>
                    Most centres also provide services in different languages and don’t require a health
                    card.</p>
                <ul>
                    <li>Use <Tooltip description={`<a href='${findHealthCentre}'>${findHealthCentre}</a>`} title='this online tool'/> to find some health
                    centres near you.</li>
                    <li>Check the websites of some centres and note programs or services that interest you.</li>
                    <li>Call or visit a health centre to find out how they can help you.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Health_Connect with a community health centre_April17.mp3'/>
            </div>
        }, {
            title: 'Make An Appointment with Your Family Doctor',
            description: <div>
                <ul>
                    <li>Make an appointment with your family doctor to talk to them about your concerns.</li>
                    <li>If you cannot access your family doctor in time, try a walk-in clinic.</li>
                    <li>If you don’t have a health card, visit a Community Health Centre.</li>
                </ul>
                <AudioContent path='action_plans/Action Plans_Health_Talk to your family doctor_April17.mp3'/>
            </div>
        }, {
            title: 'Support Your Emotional Health',
            description: <div>
                <p>Dealing with an (ex-)partner’s unsafe behaviours can cause stress.
                    Here are a few things you can do to promote your emotional health.</p>
                <ul>
                    <li>Take some time each day to remind yourself of your strengths.</li>
                    <li>If you're feeling overwhelmed, take a moment to notice your stress and
                        take deep breaths to reduce feelings of panic.</li>
                    <li>Do small things that give you peace (e.g. listening to music, reading, writing, walking).
                        You deserve self-care.</li>
                    <li>It's okay to feel down at times. Share your feelings with someone you trust.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Health_Support your emotional health_April17.mp3'/>
            </div>
        }, {
            title: 'Protect Your Sexual Health',
            description: <div>
                <p>Sexual activity without consent is never okay. Even if you are
                    married or in a relationship, it is against the law for your partner to coerce you into
                    sexual activity.</p>
                <ul>
                    <li>Learn about consent and coercion <Tooltip description={`<a href='${consentedURL}'>${consentedURL}</a>`} title='here'/>.</li>
                    <li>Talk to your family doctor about different types of <Tooltip
                        description='You can use Birth Control to prevent pregnancy and protect yourself
                        from sexually transmitted infections. There are lots of different methods of Birth Control you
                        can choose from.' title='birth control'/> you can use. There are some
                        you can use without your partner knowing.</li>
                    <li>If you don’t have a health card, or don't want to go to your family doctor, you can go to a <Tooltip
                        description='You don’t need a referral or a health card to go to these
                        clinics. You can get all sorts of health services at these clinics, like birth control
                        counseling, pregnancy tests, treatment for certain infections and more.'
                        title='sexual health clinic'/>.</li>
                    <li>Find a sexual health clinic near you <Tooltip description={`<a href='${sexualClinics}'>${sexualClinics}</a>`} title='here'/>.</li>
                </ul>
                <AudioContent path='action_plans/Action Plans_Health_Protect your sexual health_April17.mp3'/>
            </div>
        }, {
            title: 'Learn Who to Call for Health & Mental Health Emergencies',
            description: <div>
                <p><b>For health and mental health emergencies you can call these numbers at any time:</b></p>
                <ul>
                    <li>Distress Centres – Call 408-HELP, text 45645 , or chat <Tooltip description={`<a href='${dcontario}'>${dcontario}</a>`} title='online'/>.</li>
                    <li>Tele Health Ontario 1-866-797-0000 (TTY 1-866-797-0007).</li>
                    <li>During medical emergencies, <b>call 911</b>.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Health_Learn who to call for quick health and mental health emergencies_April17.mp3'/>
            </div>
        }],
        bottomDescription: actionPlansHelpText
    },
    [socialSupportPath]: {
        title: 'Social Support',
        topMyConcernText: 'Social support is at the top of your list.',
        topDescription: <div><p>Having a social support system means having people you can turn to and resources
            you can access in times of need. To build your support system you can:</p>
        <AudioContent path='action_plans/Action Plan_Social Support_Text above and below tabs_April17.mp3'/>
        </div>,
        tabs: [{
            title: 'Talk to Someone You Trust',
            description: <div>
                <p>Talking to others may help us feel safer and less alone, and may provide us with support and
                     information about how to address problems.</p>
                <ul>
                    <li>Talk to someone you trust who might understand what’s going on, like friends, family and
                        members of your faith community.</li>
                    <li>Talk to a helping professional (e.g. nurse, social worker) who may have useful
                        information to share.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Social Support_Talk to someone you trust_April17.mp3'/>
            </div>
        }, {
            title: 'Talk to a Peer or Attend a Support Group',
            description: <div>
                <p>Meeting others who have had similar experiences may also be helpful.</p>
                <ul>
                    <li>
                        These places may have support groups you might find helpful.<br/>
                        <p>
                            <Tooltip description={`<a href='${northYorkURL}'>${northYorkURL}</a>`} title='North York Women’s Centre'/><br/>
                            <Tooltip description={`<a href='${rexdaleCentreURL}'>${rexdaleCentreURL}</a>`} title='Rexdale Women’s Centre'/>
                        </p></li>
                    <li>Call or visit, to see how they can help you.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Social Support_Talk to a peer or attend a support group_April17.mp3'/>
            </div>
        }, {
            title: 'Talk to a Violence Against Women Counselor',
            description: <div>
                <p>You can talk to a professional counsellor who will help you to identify and achieve your goals.</p>
                <p>Here are some places with counselors who have experience supporting women in
                    unsafe relationships:</p>
                <p>
                    <Tooltip description={`<a href='${familyServiceURL}'>${familyServiceURL}</a>`} title='Family Service Toronto'/><br/>
                    <Tooltip description={`<a href='${scarboroughCentreURL}'>${scarboroughCentreURL}</a>`} title='Scarborough Women’s Centre'/><br/>
                    <Tooltip description={`<a href='${barbraSchliferURL}'>${barbraSchliferURL}</a>`} title='Barbra Schlifer Commemorative Clinic'/><br/>
                    <Tooltip description={`<a href='${abrigoCenreURL}'>${abrigoCenreURL}</a>`} title='Abrigo Centre'/><br/>
                </p>
                <ul>
                    <li>Check out their websites and note ones you may want to visit.</li>
                    <li>Call or visit to see how they can help you.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Social Support_Talk to a violence against women counsellor_April17.mp3'/>
            </div>
        }, {
            title: 'Try Out Social Activities in Your Community',
            description: <div>
                <p>People in unsafe relationships often feel alone. Going to new places and trying new things, including
                    fun and free programs in the city (e.g. art programs, walk and talks, and cooking, sewing, and gardening
                    groups) can help you feel less alone.</p>
                <ul>
                    <li>Visit your local public library and see what programs they offer.</li>
                    <li>Visit a community centre in your neighbourhood. There are some centres that
                        have activities just for women like the <Tooltip description={`<a href='${workingwomenURL}'>${workingwomenURL}</a>`} title="working women's centre"/>.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Soocial Support_Try out social activities in your community_April17.mp3'/>
            </div>
        }],
        bottomDescription: actionPlansHelpText
    },
    [legalPath]: {
        title: 'Legal',
        topMyConcernText: 'Legal is at the top of your list.',
        topDescription: <div><p>You have selected legal concerns as your top priority. See below for some steps you can
            take to address your legal concerns. Remember, you don’t need to take all of these steps at once. Go at
            your own pace, and do what feels right for you.</p>
        <AudioContent path='action_plans/Action Plans_Legal_Text above and below tabs_April17.mp3'/>
        </div>,
        tabs: [{
            title: 'Sign up for the Family Court Support Worker Program',
            description: <div>
                <p><b>Family Court Support Worker Program</b><br/>
                    Family Court Support Workers can help you stay safer, document abuse, and acquire housing,
                    counseling, and support for your children. Family Court Support Workers are based in communities across the province.
                </p>
                <ul>
                    <li>If you live in Toronto,
                        <ul>
                            <li>
                                <Tooltip description='You may have to leave a message. Please say your name and number clearly and tell them a time when they can
                                call back. Please tell them if it is safe to call you back and to leave a message' title='call the program'/> at
                                the Barbara Schlifer Clinic (416-323-9149 ext. 233) or
                                <Tooltip description={`<a href='${schliferclinicURL}'>${schliferclinicURL}</a>`} title='sign-up online'/>.
                            </li>
                            <li>
                                call the <Tooltip description={`<a href='${oasisfemmesURL}'>${oasisfemmesURL}</a>`} title='Oasis Centre des Femmes'/> (416-591-6565
                                ext. 224) if you prefer to speak in French.
                            </li>
                        </ul>
                    </li>
                    <li>To find the Family Court Support Program in other parts of Ontario
                        click <Tooltip description={`<a href='${attorneygeneralURL}'>${attorneygeneralURL}</a>`} title='here'/>.</li>
                </ul>
                <AudioContent path='action_plans/Action Plans_Legal_Sign up for the Family Court Support Worker Program_April17.mp3'/>
            </div>
        }, {
            title: 'Contact a Community Legal Clinic',
            description: <div>
                <p>Community legal clinics provide legal advice to low-income people living in Ontario. They may
                    be able to connect you with free a lawyer, or help you pay for a lawyer.</p>
                <ul>
                    <li>Check out <Tooltip description={`<a href='${legalAidURL}'>${legalAidURL}</a>`} title='their website'/> to learn more.</li>
                    <li>Click <Tooltip description={`<a href='${legalClinicsURL}'>${legalClinicsURL}</a>`} title='here'/> to find community legal
                        clinics near you. Explore a few websites to learn about programs that are suited
                        to your needs.</li>
                    <li>Call a community legal clinic OR legal aid Ontario (1-800-668-8258) and explain your
                        situation. Tell them you are experiencing violence in your relationship and ask how
                        they can help you.</li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Legal_Contact a community legal clinic_April17.mp3'/>
            </div>
        }, {
            title: 'Gather Evidence',
            description: <div>
                <p>It is always a good idea to keep detailed records about your (ex-)partner&#39;s abusive behaviours. This
                    will help you remember them, and collect evidence for the courts.</p>
                <ul>
                    <li>Keep a record of:
                        <ul>
                            <li>911 calls.</li>
                            <li>Criminal charges, bail conditions, and/or terms of probation.</li>
                            <li>Evidence that your partner did not follow a family court restraining order
                                in the past.</li>
                            <li>Hospital reports if you went to the hospital for treatment after an assault.</li>
                            <li>Photographs of injuries.</li>
                            <li>Evidence your (ex-)partner stalked you after you separated. You can record this in
                                a stalking log.</li>
                            <li>Emails, letters, text messages, voicemails, or social media posts that show
                                abuse, violence, control, or harassment.</li>
                            <li>Documents from a Children’s Aid Society that show how they’ve been involved
                                with your family.</li>
                        </ul>
                    </li>
                    <li>
                        Start making note of people who know your situation and can stand up for you in court.
                        This may include:
                        <ul>
                            <li>Your family doctor, if you spoke to them about abuse</li>
                            <li>Your friends, family, and/or neighbors, if they witnessed or heard abuse, harassment,
                                or violence</li>
                            <li>Your co- workers or employers, if they witnessed or heard abuse, harassments, or violence</li>
                            <li>Your child’s school teachers or day care givers, if your child ever spoke about or
                                showed signs of abuse</li>
                            <li>Shelter worker or therapists, if they’ve helped you</li>
                            <li>Your religious leader, if you’ve turned to them for support</li>
                        </ul>
                    </li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Legal_Gather evidence_April17.mp3'/>
            </div>
        }, {
            title: 'Speak with a Lawyer',
            description: <div>

                <table>
                    <tbody><tr>
                        <td><p>Get Free Legal Advice</p></td>
                        <td><div>
                            <ul>
                                <li>Call <Tooltip description='Anyone in Ontario who is experiencing
                                    domestic  violence can get a free emergency two-hour consultation with a lawyer through
                                    Legal Aid Ontario. You do not need to have immigration status in Canada to access
                                    this. Free telephone interpretation services for non-English or non-French
                                    speaking applicants are also available' title='Legal Aid Ontario'/>, (1-800-668-8258) and tell them about your legal concerns and your
                                    relationship. Ask how they can help.
                                </li>
                                <AudioContent path='action_plans/Action Plan_Legal_Learn how to access a lawyer_Get free legal advice_April22.mp3'/>
                            </ul>
                        </div></td>
                    </tr>
                    <tr>
                        <td><p>Use the Law Society Referral Service to Hire a Lawyer</p></td>
                        <td>
                            <div>
                                <p>Use <Tooltip description={`<a href='${lawSecurityURL}'>${lawSecurityURL}</a>`} title='this resource'/> to get a free 30-minute consult
                                    with a <Tooltip description='You can even ask for a lawyer who speaks your
                                    language. If you are financially-deserving and have been issued Legal Aid
                                    Certificates by Legal Aid Ontario, you can ask for lawyers who accept these
                                    certificates as lawyer fee' title='lawyer'/>. You can share your story with the
                                    lawyer and decide if you want to hire them.
                                </p>
                                <AudioContent path='action_plans/Action Plan_Legal_Learn how to access a lawyer_User the law society referral service to hire a lawyer_April22.mp3'/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Duty Counsels </p></td>
                        <td>
                            <div>
                                <p>If you have a court hearing, cannot afford a lawyer, duty counsel
                                    lawyers can represent you.<br/><br/>
                                    You can also access this service while in custody; inform the police officer
                                    that you would like to speak to a duty counsel. The officer will call the
                                    hotline for you.
                                </p>
                                <AudioContent path='action_plans/Action Plan_Legal_Learn how to access a lawyer_Duty Counsels_April22.mp3'/>
                            </div>
                        </td>
                    </tr></tbody>
                </table>
            </div>
        }, {
            title: 'Consider a Protection Order',
            description: <div>
                <p>If you are afraid of someone, you can get a protection order that limits their contact with
                    you.</p>
                <p>There are two types of &quot;protection orders&quot;:</p>
                <ol>
                    <li>A restraining order through an Ontario Family Court;</li>
                    <li>A peace bond through a Justice of the Peace</li>
                </ol>
                <ul>
                    <li> <Tooltip description={`<a href='${restrainingOrderURL}'>${restrainingOrderURL}</a>`} title='Click here'/> to
                         learn about Restraining Orders and how to get one.
                    </li>
                    <li> <Tooltip description={`<a href='${peaceBoundsURL}'>${peaceBoundsURL}</a>`} title='Click here'/> to
                         learn about Peace Bonds and how to get one.
                    </li>
                </ul>
                <AudioContent path='action_plans/Action Plan_Legal_Filling for protection orders_April17.mp3'/>
            </div>
        }, {
            title: 'Address Concerns about your Immigration Status',
            description: <div>
                <p>It is best to get legal advice about your immigration concerns.</p>
                <p>While we cannot give you legal advice, here are some things to consider:</p>
                <ul>
                    <li>If you are a Canadian citizen, your immigration status is not at risk if you leave
                        an abusive relationship.</li>
                    <li>If you are a permanent resident, in most cases, your status is not at risk if you leave an
                        abusive relationship. However, there are some potential risks if you were sponsored and
                        immigration authorities conduct an investigation that raises doubt about
                        either the relationship or your application.</li>
                    <li>If your permanent residency is conditional, your sponsorship application is in process, or
                        you have temporary or no status, you need to seek legal advice.</li>
                </ul>
                <p>
                    The above information was collected from the <Tooltip description={`<a href='${refugeeLegalURL}'>${refugeeLegalURL}</a>`} title='Neighbours, Friends & Family Campaign for
                        Immigrant and Refugee Communities'/>.
                </p>
                <p>
                    For more information, <Tooltip description={`<a href='${refugeeSettleURL}'>${refugeeSettleURL}</a>`} title='click here'/> for a fact sheet from CLEO.
                </p>
                <AudioContent path='action_plans/Action Plan_Legal_Address concerns about your immigration status_April17.mp3'/>
            </div>
        }],
        bottomDescription: <div>{actionPlansHelpText}</div>
    }
});

export default actionPlanContent;