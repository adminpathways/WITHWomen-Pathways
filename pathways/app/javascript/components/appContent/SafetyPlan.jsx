import Tooltip from '../ToolTip';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import React from 'react';
import {Link} from 'react-router-dom';
import {legalPath, safetyTipsPath, emergencyTipsPath} from '../routes';
import AudioContent from '../AudioContent';
import {push} from 'react-router-redux';

const domesticURL =
  'https://www.ontario.ca/document/your-guide-employment-standards-act-0/' +
  'domestic-or-sexual-violence-leave';
const stalkURL =
  'https://www.justice.gc.ca/eng/rp-pr/cj-jp/fv-vf/stalk-harc/har.html';
const crimeLawURL =
  'https://www.cbabc.org/For-the-Public/Dial-A-Law/Scripts/Criminal-Law/206';
const petSafetyURL = 'https://www.ovma.org/pet-owners/safepet-program/';

export const pcawaSafetyURL =
  'https://www.pcawa.net/uploads/1/4/7/1/14711308/' +
  'pcawa_safety_handbook_2010_10_28_-_eng.pdf';

export const mountsinaiSafetyURL =
  'http://www.mountsinai.on.ca/about_us/human-rights/resources-to-address-violence-' +
  'against-women/creating-a-safety-plan-english-2015-aoda.pdf/';

export const safetyPlanSteps = [
    {
        id: 1,
        title: 'Children\'s Safety'
    },
    {
        id: 2,
        title: 'Pet Safety'
    },
    {
        id: 3,
        title: 'Safety at Home'
    },
    {
        id: 4,
        title: 'Safety at Work'
    },
    {
        id: 5,
        title: 'Stalking and safety online'
    }
];

const safetyPlanContent = dispatch => [
    /*
     * {
     * title: 'Emergency Tips',
     * description: '',
     * tabs: [
     * {
     * title: 'Emergency Escape Plan',
     * description: <div>
     * <p>
     * Since relationships can become unsafe quickly, it's best to be prepared in advance. The
     * Emergency Escape Plan focuses on the things you can do <b>ahead of time</b> to be better
     * prepared in case you have to quickly leave a dangerous situation.
     * </p>
     * <ul>
     * <li>Tell someone you trust about what’s happening to you. It’s important to inform someone about
     * the harmful behaviours you are experiencing.</li>
     * <li><p>Make copies of the important <Tooltip
     * description='<b>Important documents include:</b><br/><br/>
     * <ul><li>Passports (including your children’s passports), Permanent Residence Cards or
     * </li>
     * <li>Citizenship documents, birth certificates, immigration papers, work permits, etc.
     * </li>
     * <li>Prescriptions, vaccination and medical records for you and your children<br/>
     * Insurance documents</li>
     * <li>Marriage certificate, divorce papers, custody documentation, protection and
     * restraining orders, other legal documents.</li>
     * <li>Copies of documents related to housing (for example, mortgage details or lease,
     * rental arrangement)</li>
     * <li>Any police reports of abuse or court orders such as restraining orders.</li>
     * <li>All social assistance (Ontario Works, Ontario Disability Support Plan)
     * documentation.</li></ul>
     * You can make photocopies of these things and store them in a safe place, away from
     * the originals. Hide the originals someplace else, if you can.' title='documents'/>; and
     * keep them in a <Tooltip description='<b>Here are some safe places you might consider:
     * </b><br/><br/>
     * <ul><li>At home, hide them where you can grab them quickly.</li>
     * <li>At a trusted friends or family member’s house</li>
     * <li>With your lawyer</li>
     * <li>In a safety deposit box (at your bank) that your partner does not have access
     * to</li></ul>' title='safe place'/>.
     * </p>
     * <AudioContent path='safety_plans/Safety Plan_Emergency Escape Plan_Text before try to keep your wallet handy._April22-[AudioTrimmer.com].mp3'/>
     * </li>
     * <li>Try to keep your wallet handy. Make sure to always carry the following things:
     * <ul>
     * <li>Wallet with <Tooltip description='<b>Keep the following cards (and if possible,
     * their copies) with you:</b><br/><br/>
     * <ul><li>Social insurance number (SIN) card</li>
     * <li>Credit and debit cards, cheque book, money (cash)</li>
     * <li>Address book</li>
     * <li>Health cards (yours and your children’s)</li>
     * <li>Drivers’ license and car registration (if applicable)</li>
     * <li>Picture of your partner</li></ul>' title='these important cards'/></li>
     * <li>Keep keys for your home, car, workplace, safety deposit box, etc.</li>
     * <li>Emergency money (in cash) hidden away. Save $20-30 for cab fare and change for a payphone</li>
     * <li>A Charged cell phone</li>
     * </ul>
     * </li>
     * <li>Consider packing a <Tooltip description='You should pack extra clothing, medicine,
     * some cash, toiletries, special comfort toys for children (if you have children), and other
     * valuables in a bag; hide it at home where you can grab it quickly if you have to leave.
     * You can also consider hiding it at a friend or family member’s
     * house.' title='emergency bag'/> in case you have to stay
     * away from home for a while.</li>
     * </ul>
     * <p>
     * Plan your emergency exits. Think about how long it might take for you to access
     * safe transportation (e.g., taxi, bus, Wheel-Trans, etc.).<br/><br/>
     * <b>Plan and rehearse the steps</b> you will take if you have to leave quickly, and learn them well.
     * </p>
     * <ul><li>When you leave your home, <b>take your children with you</b> if you can, as the police cannot help
     * you remove them from their other parent unless you have a valid court order.</li></ul>
     * <ul><li>If arranged through a local police division, the police can escort you back to the home
     * to remove additional personal belongings.</li></ul>
     * <AudioContent path='safety_plans/Safety Plan_Emergency Plan_Text after try to keep your wallet handy_April22.mp3'/>
     * </div>
     * },
     * {
     * title: 'What to expect if you call 911',
     * description: <div>
     * <ul>
     * <li>Remember that there is no charge when calling 911 (including from a payphone).</li>
     * <li>Try to remain on the line until you are told it's okay to hang-up.<br/>
     * If you have difficulty with English, tell the call-taker the name of the
     * language you speak. Stay on the line while you are connected to interpreter
     * services that can provide assistance in your language.</li>
     * <li><b>If you are a woman without legal status</b> in Canada, police involvement
     * may result <b>in arrest, detainment, and/or deportation.</b> Refer
     * to the <Link to={`${legalPath}#tab-6`}> Legal section</Link> for more information.</li>
     * <li>When the police are called to respond to an incident in your home, <b>there is
     * a chance that you may be charged with a crime.</b> This can occur if the perpetrator
     * claims you have assaulted them, even if you acted in <b>self-defence.</b></li>
     * <li>Police involvement can result in the involvement of a <b>Childrens Aid Society. </b>
     * The goal of this is to reduce risk to children, not to remove the children
     * from the care of the non-offending parent.</li>
     * </ul>
     * <p>
     * Be aware of this information, but don't let it stop you
     * from calling 911 if you are in extreme danger.
     * </p>
     * <AudioContent path='safety_plans/Safety Plan_Emergency Plan_What to expect if you all 911_April22.mp3'/>
     * </div>
     * },
     * {
     * title: 'During a violent incident',
     * description: <div>
     * <ul>
     * <li><b>Don’t panic.</b> Remind yourself that you have an Emergency
     * Escape Plan and go over it in your mind.</li>
     * <li>Try to position yourself to get out quickly or near a phone so you can call 911
     * if necessary. Leave the phone off the hook or turn it off after your call. If you hang up the
     * phone, the police may call back ,which can create a dangerous situation for you.</li>
     * <li><b>Try to move to a space where the risk of violence is lowest.</b> Try to avoid arguments
     * in the bathroom, garage, kitchen, near weapons, or in rooms without access to an outside
     * door or window.</li>
     * <li>Once you are in a safe place, have a friend/ family member <b>take photographs
     * of any injuries you sustained.</b> This can also be done at the
     * hospital if you choose to seek medical care. Take photographs of any damaged property.
     * All this can be used as evidence.</li>
     * <li><b>If relevant, collect evidence of sexual assault.</b> Go directly to a hospital where
     * a trained professional will examine you, collect evidence, provide you with medical care and
     * connect you with supports in your community. Don’t bathe or
     * shower, and bring the clothes you were wearing (don’t wash them).
     * You can save the evidence in case you decide to pursue charges.</li>
     * </ul>
     * <AudioContent path='safety_plans/Safety Plan_Emergency Plan_During a Violent Incident_April22.mp3'/>
     * </div>
     * }
     * ]
     * },
     */
    {
        title: 'Safety at Home',
        description: '',
        linkedIds: [3],
        tabs: [
            {
                title:
          'I live with my (ex-)partner and I want to make a plan to increase my safety in the home we share',
                description:
          <div>
              <p>
              You have already shown strength and courage to cope with the
              unsafe relationship behaviours you have encountered. Remember, you
              are neither responsible for nor can control your partner or
              (ex-)partner’s behaviours towards you.
              </p>
              <p>
              However, there are some actions that you can take to increase your
              safety:
              </p>
              <ul>
                  <li>
                Confide in someone who can understand what you are going
                through. It’s is easier to cope with stressful situations when
                you have others looking out for you.
                  </li>
                  <br/>
                  <li>
                Notice what triggers your (ex-)partner’s violence. This can help
                you predict the next incident and give you a chance to prepare
                (e.g., make plans to have your children be sent over to
                friends/family in advance).
                  </li>
                  <br/>
                  <li>
                Think about objects that could be used as weapons (e.g., knives,
                other heavy or sharp objects). Try to keep these out of reach.
                If your (ex-)partner has guns, lock them up or hide them if you
                can.
                  </li>
                  <br/>
                  <li>
                If you have call display on your phone, be careful about who can
                access the stored numbers, such as the last number you dialed or
                received a call from.
                  </li>
                  <br/>
                  <li>
                Plan ahead of time, get your{' '}<Link to='/emergency-tips#tab-1'>Emergency Escape Plan</Link>{' '}
                in order, and review it often.
                  </li>
              </ul>
              <AudioContent path='safety_plans/Safety Plan_Safety at home_in a home you share with your (ex)-partner_April22.mp3'/>
          </div>

            },
            {
                title:
          'I don’t live with my (ex-)partner and I want to make a plan to increase my safety in my own home',
                description:
          <div>
              <p>
              You have shown strength and courage to cope with the unsafe
              behaviours you have encountered. As you rebuild certain areas of
              your life, it’s important to be mindful of your safety. Consider
              taking the following steps; start with those that seem easiest:
              </p>
              <ul>
                  <li>
                Instruct those who know of your whereabouts to tell your abusive
                (ex-)partner, that they don't know where you are or how to
                contact you.
                  </li>
                  <br/>
                  <li>
                Change the locks on the doors, windows, garage, and mailbox.
                Install a peephole in the door that your children (if you have
                children) can see through as well. If possible, install an alarm
                system. Keep doors and windows locked at all times.
                  </li>
                  <br/>
                  <li>
                Have a pre-recorded anonymous message on your telephone
                answering service rather than your own voice and don't identify
                yourself by name.
                  </li>
                  <br/>
                  <li>
                Carry a charged cell phone and have important numbers on speed
                dial.
                  </li>
                  <br/>
                  <li>
                Always keep a copy of your protection order near you. If your{' '}
                      <b>(ex-)partner violates the protection order</b> or{' '}
                      <b>threatens you</b>, immediately call the police.
                  </li>
                  <br/>
                  <li>
                If your (ex-)partner has lived in or has been to your house
                before, consider moving your furniture around, as they may not
                anticipate this if they break into your house, causing them to
                bump into the furniture and giving you time to act.
                  </li>
                  <br/>
                  <li>
                Put items that could be used as weapons (e.g., knives, heavy
                kitchen utensils) in cupboards where they are not easily
                accessible. If you have access to guns, lock them away.
                  </li>
                  <br/>
                  <li>
                If you live in an apartment, speak to security to request
                increased safety measures in your building. Be cautious as you
                go about your day.
                  </li>
              </ul>
              <AudioContent path='safety_plans/Safety Plan_Safety at Home_When you dont live with your (ex)-partner_April22.mp3'/>
          </div>

            }
        ]
    },
    {
        title: 'Child Safety Plan',
        linkedIds: [1],
        description:
      <div>
          <p>
          Even if they never see unsafe behaviour, children can sense when
          something is wrong. You can take steps to comfort them and help them
          cope. Let them know that neither you nor they are the cause of your
          (ex-)partner's unsafe behaviours and that keeping you safe is not
          their responsibility. Emphasize how important their safety is to you.
          Talk to them about the situation and plan the following steps:
              <br/>
              <br/>
          </p>
          <ul>
              <li>
            Create a <b>safe word</b> that should be their cue to leave the room
            and go to a pre-arranged safe place.
              </li>
              <br/>
              <li>
                  <b>Pick a safe place that you go to with your children,</b>{' '}
            preferably with a lock and a phone (landline, cell phone or an
            emergency phone).
              </li>
              <br/>
              <li>
            It's important to tell your children to{' '}
                  <b>not use the phone in front of your (ex-)partner</b>; this might
            put them at risk.
              </li>
              <br/>
              <li>
            If you have a cell phone, teach your children how to use it to{' '}
                  <b>contact the police by dialing 911.</b>
              </li>
              <br/>
              <li>
                  <b>Rehearse what your children will say when they call for help.</b>{' '}
                  <Tooltip
                      description='<b>An example
                of a sample script to follow when calling 911:</b><br/><br/>
                <ul><li>An operator will answer and say: ‘police, fire, ambulance’.<br/>
                <li>Your child should say: police.</li>
                <li>Then your child should say:</li></ul>
                "My name is ……….
                I need help. Send the police.
                Someone is hurting my mom.
                The address here is ……….
                The phone number here is ………."'
                      title='Click here'
                  />{' '}
            for a sample script.
              </li>
              <br/>
              <AudioContent path='safety_plans/Safety Plan_Child Safety plan_Text before Its important for children to leave April22.mp3'/>
              <li>
                  <b>
              It's important for children to leave the phone off the hook or
              turn it off after they are done talking.
                  </b>{' '}
            If they hang up the phone, the police may call back, which can
            create a dangerous situation.
              </li>
              <br/>
              <li>
                  <b>Practice</b> and <b>roleplay</b> this plan with your children,
            including what to do and where to go in case of emergency.
              </li>
              <br/>
              <li>
                  <Tooltip
                      description='If you have a protection order in place, make sure that the school, day care,
                and police have a copy of all court orders including restraining orders, custody and access orders,
                as well as a picture of your partner.<br/><br/>
                Tell the school, daycare, babysitter, and people who have permission to pick up your children that
                your (ex) partner is not permitted to do so and ask that they not give your contact information to
                anyone.<br/><br/>
                If your (ex) partner has legal access to your children, talk to a lawyer about getting supervised
                access or having access denied.<br/><br/>
                If your ex (partner) has visitations with your children and you do not want to have contact with your
                (ex)partner, arrange for transportation for your children'
                      title='Click here'
                  />{' '}
            for steps you could consider taking if you don’t live with your
            (ex-)partner and have{' '}
                  <Tooltip
                      description='Refer to Legal action plan on how
                to obtain a protection order.'
                      title='a protection order'
                  />{' '}
            in place.
              </li>
              <br/>
          </ul>
          <AudioContent path='safety_plans/Safety Plan_Child Safety plan_Text after Its important for children to leave April22.mp3'/>
      </div>

    },
    {
        title: 'Pet Safety Plan',
        linkedIds: [2],
        description:
      <div>
          <p>
          It’s harder to leave an unsafe situation if it means leaving your pets
          behind. The Safe Pet Program can provide temporary housing and care
          for your pets. For more information on the Safe Pet program, click{' '}
              <Tooltip
                  description="Visit this web link to the Pet safe program:<br/>
                <a href='https://www.ovma.org/pet-owners/safepet-program/'>
                https://www.ovma.org/pet-owners/safepet-program/</a>"
                  title='here'
              />
          .
              <Tooltip
                  description={`<a href='${petSafetyURL}'>${petSafetyURL}</a>`}
              />
          </p>
          <p>
          You can find out which places offer the Safe Pet Program by calling
          the Assaulted Women’s Help Line at 1-866-863-0511 (TTY
          1-866-863-7868). If you are considering local women’s shelters you can
          call them and ask about this program.
          </p>
          <p>
          If you are leaving an unsafe situation and taking your pet with you,
          remember to{' '}
              <Tooltip
                  description='<ul><li>Pet’s ownership record</li>
                <li>Pet’s health and vaccination record</li>
                <li>Favorite blanket, toys, bowls etc.</li></ul>'
                  title=' bring these things'
              />
          .
          </p>
          <AudioContent path='safety_plans/Safety Plan_Pet Safety Plan_April22.mp3'/>
      </div>

    },
    {
        title: 'Work Safety Plan',
        linkedIds: [4],
        description: '',
        tabs: [
            {
                title: 'Safety at work',
                description:
          <div>
              <p>
              Unsafe relationship behaviours can spill over into the work
              setting. You can take advantage of workplace safety guidelines to
              increase your and your co-workers’ safety.
                  <br/>
              When it’s appropriate, consider telling a co-worker you trust
              about your (ex-)partner's unsafe behaviours towards you. Consider
              carefully which people to ask for help.
                  <br/>
              If you are comfortable, you may:
                  <br/>
                  <br/>
              </p>
              <ul>
                  <li>
                Show a picture of your (ex-)partner and, if applicable, provide
                a description of their car to colleagues and security personnel.
                  </li>
                  <br/>
                  <li>
                Tell the security supervisor and other people you trust about
                your situation and ask that they refrain from giving anyone
                personal information about you.
                  </li>
                  <br/>
                  <li>
                Ask to have your calls screened at work or use voicemail to
                screen your calls. Document any unwanted calls from your
                (ex-)partner.
                  </li>
                  <br/>
                  <li>Block unwanted emails or filter them to the Trash folder.</li>
              </ul>
              <AudioContent path='safety_plans/Safety Plan_Work safety plan_Safety at work_April22.mp3'/>
          </div>

            },
            {
                title: 'Domestic or sexual violence leave',
                description:
          <div>
              <ul>
                  <li>
                You may be entitled to domestic or sexual violence leave, which
                is a job- protected leave of absence. It provides anywhere
                between 10 days and 15 weeks’ time-off in a calendar year. You
                can find more information{' '}
                      <Tooltip
                          description={`<a href='${domesticURL}'>${domesticURL}</a>`}
                          title='here'
                      />
                .
                  </li>
              </ul>
              <AudioContent path='safety_plans/Safety Plan_Work Safety Plan_Domestic or Sexual Violence Leave_April22.mp3'/>
          </div>

            },
            {
                title: 'When arriving at or leaving work',
                description:
          <div>
              <ul>
                  <li>
                Be alert and cautious when you are on your way to and back from
                work. Consider carrying your car keys in your hands or getting a
                remote car door opener if possible. Avoid lonely streets and
                parking areas; walk with someone to your car or bus, especially
                when there are not many people around.
                  </li>
                  <br/>
                  <li>
                Change the patterns of when you arrive and leave work and/or the
                routes you take.
                  </li>
              </ul>
              <AudioContent path='safety_plans/Safety Plan_Work Safety Plan_When arriving at or leaving work_April22.mp3'/>
          </div>

            }
        ]
    },
    {
        title: 'Dealing with Stalking',
        linkedIds: [5],
        description:
      <div>
          <ul>
              <li>
            If you are in immediate danger, call 911 and inform the police that
            you are being{' '}
                  <Tooltip
                      description={`${'Stalking is a Crime' +
                'Called Criminal Harassment- this link by the Government of Canada, Department of Justice' +
                'provides information on legal issues, what to do, and what types of services can ' +
                'help.<br/>'}<a href='${stalkURL}'>${stalkURL}</a>`}
                      title='stalked'
                  />
            . Trust your instincts. If you feel unsafe, you probably are.
              </li>
              <br/>
              <li>Inform someone you trust, such as a relative or a friend.</li>               <br/>
              <li>
            Develop a safety plan:
                  <ol type='a'>
                      <li>Change your routine</li>
                      <li>
                If possible, have a friend or relative to go places with you
                      </li>
                      <li>Keep a list of emergency numbers handy</li>
                      <li>Arrange a place to stay if needed</li>
                      <li>
                Decide in advance what you would do if the stalker shows up
                where you are
                      </li>
                  </ol>
              </li>
              <li>
            Maintain a stalking log.
              </li>
              <br/>
              <li>
            For information on cyberbullying and stalking,{' '}
                  <Tooltip
                      description={`${'For' +
                'information on cyberstalking, click on this ' +
                'link:<br/>'}<a href='${crimeLawURL}'>${crimeLawURL}</a>`}
                      title='click here.'
                  />
              </li>
              <br/>
              <li>
            Record any conversations that happen over the phone, via email,
            notes, or mail
              </li>
              <br/>
              <li>Consider getting a court against the stalker.</li>
          </ul>
          <br/>
          <AudioContent path='safety_plans/Safety Plan_Dealing with Stalking_April22.mp3'/>
      </div>

    }
];

export default safetyPlanContent;