import React from 'react';

const Story = (props) => {
    return (
        <div>
            <p> Today I went to {props.noun1}. It was a pretty {props.adj1}. While I was there, I saw {props.noun2}, and they were {props.adj2}, but by that time I was feeling pretty {props.adj2}. Suddenly a huge {props.noun3} {props.verb2} onto the scene and {props.verb2} the crap out of {props.noun4}. I hope you enjoyed this {props.adj2} story written by Andee and Art. You're welcome. </p>
        </div>
    )
}
export default Story
