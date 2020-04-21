import React from 'react';
import AudioContent from '../AudioContent';

const dangerBottom = <p>
    We strongly urge you to do the following:
    <ul>
        <li>Please call 911 if you feel your life, or someone else’s life is in danger.
            Trust your instincts as every situation is unique.</li>
        <li>Get help from a professional. Talk to someone at the Assaulted Women’s helpline
            (1-866-863-0511). Tell them about your high Danger Assessment score and the
            behaviours you are experiencing in your relationship. Call them now and let
            them help you make a plan to decrease the amount of danger you are in.</li>
        <li>This can be a dangerous time for you. Talk to someone you can trust like a friend,
            family member or professional advocate so they can carefully support your plans for safety.</li>
    </ul>
</p>;

const extremeDanger = {
    title: 'Extreme danger',
    topDescription: <div>
        <AudioContent path='assess_danger/Assess your Danger_Extreme Danger_April15.mp3'/>
        <p><b>
            Your Danger Assessment score suggests that the types of unsafe behaviours
            you have experienced in your relationship are extremely dangerous.
        </b></p>
        <p>
            This is very concerning as you are at risk for ongoing severe harm. This will
            likely get worse and will not stop. This level of danger reflects a high risk
            of being killed by your partner or ex-partner.
        </p>
        <p>You should seek help to increase your level of safety NOW:</p>
    </div>,
    bottomDescription: <div>
        {dangerBottom}
        <p>Once you have done these things and reduced the level of danger in your relationship,
            you can come back to <b>Pathways</b> and plan your next steps.</p>
    </div>
};

const severeDanger = {
    title: 'Severe danger',
    topDescription: <div>
        <AudioContent path='assess_danger/Assess your danger_Severe Danger_Text prior to next button_June3.mp3'/>
        <p>
            Your Danger Assessment score suggests <b>that the types of unsafe behaviours
            you have experienced in your relationship are severe.</b> This is very worrying
            as you are at risk for ongoing severe harm. This will likely get worse and will not stop.
        </p>
    </div>,
    bottomDescription: <div>
        <AudioContent path='assess_danger/Assess your danger_Sereve Danger_Text after next button_June3.mp3'/>
        {dangerBottom}
        <p>Since circumstances around relationships can change quickly, we recommend that you use
            this app to learn about safety planning and familiarize yourself with the resources provided.</p>
        <p>You can revisit this app at a later time if you feel anything has changed in your relationship;
            you can redo the Danger Assessment to help you be more aware of any changes to the level of danger
            you are exposed to as a result of your partner or ex-partner’s unsafe behaviours towards you.</p>
    </div>
};

const increasedDanger = {
    title: 'Increased danger',
    topDescription: <div>
        <AudioContent path='assess_danger/Assess your Danger_Increased Danger Text prior to next button_April15.mp3'/>
        <p>
            Your Danger Assessment score suggests you are at risk of experiencing danger from your partner or ex-partner.
            You are at risk for ongoing harm. The unsafe behaviours in your relationship will most likely continue;
            this will likely get worse and will not stop.
        </p>
    </div>,
    bottomDescription: <div>
        <AudioContent path='assess_danger/Assess your Danger_Increased Danger_Text after next button_April15.mp3'/>
        <ul>
            <li>We recommend you use <b>Pathways</b> to familiarize yourself
                with the action and safety plans provided</li>
            <li>Remember, you know your situation best, so trust your instincts.
                If you ever feel like the level of danger in your relationship has changed,
                you can always come back and answer these questions again</li>
            <li>Talk to a trusted family member or friend about any unsafe behaviours
                you might notice in your relationship</li>
            <li>Get help from a professional. Talk to someone at the Assaulted Women’s helpline
                (1-866-863-0511). Tell them about your high Danger Assessment score and the behaviours
                you are experiencing in your relationship. They can help you make a plan to
                decrease the amount of danger you are in</li>
        </ul>
        <p>Please call 911 if you feel your life, or someone else’s life is in danger.
            Trust your instincts as every person’s situation is unique.</p>
    </div>
};

const variableDanger = {
    title: 'Variable danger',
    topDescription: <div>
        <AudioContent path='assess_danger/Assess your Danger_Variable Danger_Text prior to next button_April15.mp3'/>
        <p>
            Your Danger Assessment score suggests you’re not in immediate danger from your partner or ex-partner.
            While you may not be at risk for experiencing immediate danger, you can still consider ways
            to improve the overall health and safety in your relationship.
        </p>
    </div>,
    bottomDescription: <div>
        <AudioContent path='assess_danger/Assess your Danger_Variable Danger_Text under Next Button_April15.mp3'/>
        <p>
            Since circumstances around relationships can change quickly, therefore:
            <ul>
                <li>We recommend you use <b>Pathways</b> to learn about relationship
                    safety and familiarize yourself with the action and safety plans provided</li>
                <li>Remember, you know your situation best, so trust your instincts. If you ever
                    feel like the level of danger in your relationship has changed,
                    you can come back and answer these questions again</li>
                <li>Talk to a trusted family member or friend about any unsafe behaviours
                    you might notice in your relationship</li>
                <li>Talk to a trained professional if you feel you need more help or want more information.</li>
            </ul>
        </p>
        <p>Please call 911 if you feel your life is in danger. Trust your instincts as
            every person’s situation is unique.</p>
    </div>
};

export const extremeDangerScore = 18;

export const severeDangerScore = 14;

export const increasedDangerScore = 8;

export const assessmentResult = score => {
    if (score >= extremeDangerScore) {
        return extremeDanger;
    }
    else if (score >= severeDangerScore) {
        return severeDanger;
    }
    else if (score >= increasedDangerScore) {
        return increasedDanger;
    }

    return variableDanger;
};