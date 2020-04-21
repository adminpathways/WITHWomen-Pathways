import Tooltip from '../ToolTip';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import React from 'react';
import {Link} from 'react-router-dom';
import {legalPath} from '../routes';
import AudioContent from '../AudioContent';

const domesticURL = 'https://www.ontario.ca/document/your-guide-employment-standards-act-0/' +
    'domestic-or-sexual-violence-leave';
const stalkURL = 'https://www.justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/stalk-harc/har.html';
const stalkLogURL = 'http://publications.gov.sk.ca/documents/9/95776-Stalking%20Log%2016-11-1.pdf';
const crimeLawURL = 'https://www.cbabc.org/For-the-Public/Dial-A-Law/Scripts/Criminal-Law/206';
const petSafetyURL = 'https://www.ovma.org/pet-owners/safepet-program/';

export const pcawaSafetyURL = 'https://www.pcawa.net/uploads/1/4/7/1/14711308/' +
    'pcawa_safety_handbook_2010_10_28_-_eng.pdf';

export const mountsinaiSafetyURL = 'http://www.mountsinai.on.ca/about_us/human-rights/resources-to-address-violence-' +
    'against-women/creating-a-safety-plan-english-2015-aoda.pdf/';

const emergencyTipsContent = () => [
    {
        title: 'Emergency Escape Plan',
        description: <div>
            <p>
                Since relationships can become unsafe quickly, it's best to be prepared in advance. The
                Emergency Escape Plan focuses on the things you can do <b>ahead of time</b> to be better
                prepared in case you have to quickly leave a dangerous situation.
            </p>
            <ul>
                <li>Tell someone you trust about what’s happening to you. It’s important to inform someone about
                    the harmful behaviours you are experiencing.</li>
                <li><p>Make copies of the important <Tooltip
                    description='<b>Important documents include:</b><br/><br/>
                        <ul><li>Passports (including your children’s passports), Permanent Residence Cards or
                        </li>
                        <li>Citizenship documents, birth certificates, immigration papers, work permits, etc.
                        </li>
                        <li>Prescriptions, vaccination and medical records for you and your children<br/>
                        Insurance documents</li>
                        <li>Marriage certificate, divorce papers, custody documentation, protection and
                        restraining orders, other legal documents.</li>
                        <li>Copies of documents related to housing (for example, mortgage details or lease,
                        rental arrangement)</li>
                        <li>Any police reports of abuse or court orders such as restraining orders.</li>
                        <li>All social assistance (Ontario Works, Ontario Disability Support Plan)
                        documentation.</li></ul>
                        You can make photocopies of these things and store them in a safe place, away from
                        the originals. Hide the originals someplace else, if you can.' title='documents'/>; and
                    keep them in a <Tooltip description='<b>Here are some safe places you might consider:
                        </b><br/><br/>
                        <ul><li>At home, hide them where you can grab them quickly.</li>
                        <li>At a trusted friends or family member’s house</li>
                        <li>With your lawyer</li>
                        <li>In a safety deposit box (at your bank) that your partner does not have access
                        to</li></ul>' title='safe place'/>.
                </p>
                <AudioContent path='safety_plans/Safety Plan_Emergency Escape Plan_Text before try to keep your wallet handy._April22-[AudioTrimmer.com].mp3'/>
                </li>
                <li>Try to keep your wallet handy. Make sure to always carry the following things:
                    <ul>
                        <li>Wallet with <Tooltip description='<b>Keep the following cards (and if possible,
                            their copies) with you:</b><br/><br/>
                            <ul><li>Social insurance number (SIN) card</li>
                            <li>Credit and debit cards, cheque book, money (cash)</li>
                            <li>Address book</li>
                            <li>Health cards (yours and your children’s)</li>
                            <li>Drivers’ license and car registration (if applicable)</li>
                            <li>Picture of your partner</li></ul>' title='these important cards'/></li>
                        <li>Keep keys for your home, car, workplace, safety deposit box, etc.</li>
                        <li>Emergency money (in cash) hidden away. Save $20-30 for cab fare and change for a payphone</li>
                        <li>A Charged cell phone</li>
                    </ul>
                </li>
                <li>Consider packing an <Tooltip description='You should pack extra clothing, medicine,
                    some cash, toiletries, special comfort toys for children (if you have children), and other
                    valuables in a bag; hide it at home where you can grab it quickly if you have to leave.
                    You can also consider hiding it at a friend or family member’s
                    house.' title='emergency bag'/> under 'emergency escape plan' tab.</li>
            </ul>
            <p>
                Plan your emergency exits. Think about how long it might take for you to access
                safe transportation (e.g., taxi, bus, Wheel-Trans, etc.).<br/><br/>
                <b>Plan and rehearse the steps</b> you will take if you have to leave quickly, and learn them well.
            </p>
            <ul><li>When you leave your home, <b>take your children with you</b> if you can, as the police cannot help
                you remove them from their other parent unless you have a valid court order.</li></ul>
            <ul><li>If arranged through a local police division, the police can escort you back to the home
                to remove additional personal belongings.</li></ul>
            <AudioContent path='safety_plans/Safety Plan_Emergency Plan_Text after try to keep your wallet handy_April22.mp3'/>
        </div>
    },
    {
        title: 'What to expect if you call 911',
        description: <div>
            <ul>
                <li>Remember that there is no charge when calling 911 (including from a payphone).</li>
                <li>Try to remain on the line until you are told it's okay to hang-up.<br/>
                    If you have difficulty with English, tell the call-taker the name of the
                    language you speak. Stay on the line while you are connected to interpreter
                    services that can provide assistance in your language.</li>
                <li><b>If you are a woman without legal status</b> in Canada, police involvement
                    may result <b>in arrest, detainment, and/or deportation.</b> Refer
                    to the <Link to={`${legalPath}#tab-6`}> Legal section</Link> for more information.</li>
                <li>When the police are called to respond to an incident in your home, <b>there is
                    a chance that you may be charged with a crime.</b> This can occur if the perpetrator
                    claims you have assaulted them, even if you acted in <b>self-defence.</b></li>
                <li>Police involvement can result in the involvement of a <b>Childrens Aid Society. </b>
                    The goal of this is to reduce risk to children, not to remove the children
                    from the care of the non-offending parent.</li>
            </ul>
            <p>
                Be aware of this information, but don't let it stop you
                from calling 911 if you are in extreme danger.
            </p>
            <AudioContent path='safety_plans/Safety Plan_Emergency Plan_What to expect if you all 911_April22.mp3'/>
        </div>
    },
    {
        title: 'During a violent incident',
        description: <div>
            <ul>
                <li><b>Don’t panic.</b> Remind yourself that you have an Emergency
                        Escape Plan and go over it in your mind.</li>
                <li>Try to position yourself to get out quickly or near a phone so you can call 911
                        if necessary. Leave the phone off the hook or turn it off after your call. If you hang up the
                        phone, the police may call back ,which can create a dangerous situation for you.</li>
                <li><b>Try to move to a space where the risk of violence is lowest.</b> Try to avoid arguments
                        in the bathroom, garage, kitchen, near weapons, or in rooms without access to an outside
                        door or window.</li>
                <li>Once you are in a safe place, have a friend/ family member <b>take photographs
                        of any injuries you sustained.</b> This can also be done at the
                        hospital if you choose to seek medical care. Take photographs of any damaged property.
                        All this can be used as evidence.</li>
                <li><b>If relevant, collect evidence of sexual assault.</b> Go directly to a hospital where
                        a trained professional will examine you, collect evidence, provide you with medical care and
                        connect you with supports in your community. Don’t bathe or
                        shower, and bring the clothes you were wearing (don’t wash them).
                        You can save the evidence in case you decide to pursue charges.</li>
            </ul>
            <AudioContent path='safety_plans/Safety Plan_Emergency Plan_During a Violent Incident_April22.mp3'/>
        </div>
    }
];

export default emergencyTipsContent;