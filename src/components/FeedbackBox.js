import { useLocation } from 'react-router-dom';

function $1(props) {
    const defaultBody = `\n\nadditional-information:\npathname: ${useLocation().pathname}\nuser-agent: ${navigator.userAgent}`;
    return (
        <>
            <input type="checkbox" id="feedback-hidden-check"/>
                <label className="chat-btn" htmlFor="feedback-hidden-check" title="Feedback">
                    <svg className="comment" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
                        <g style={{stroke: "none", strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                            <path d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z" style={{stroke: "none", strokeWidth: 1, strokeSasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(29,29,27)", fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            <path d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z" style={{stroke: "none", strokeWidth: 1, strokeSasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(29,29,27)", fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            <path d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z" style={{stroke: "none", strokeWidth: 1, strokeSasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(29,29,27)", fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            <path d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z" style={{stroke: "none", strokeWidth: 1, strokeSasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(29,29,27)", fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            <path d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z" style={{stroke: "none", strokeWidth: 1, strokeSasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(29,29,27)", fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        </g>
                    </svg>
                    <svg className="close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88" enableBackground="new 0 0 122.881 122.88" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z"/></g></svg>
                    <br/>
                </label>
                <div id="feedback-box-wrapper">
                    <div id="feedback-header"><h6>Feedback</h6></div>
                    <div className="text-center p-2 text-white">
                        <span>We love to hear your feedback</span>
                    </div>
                    <form className="chat-form" action="mailto:xjing@clemson.edu" method="get" encType="text/plain">
                        <input style={{display: "none"}} type="text" className="form-control" name="subject" value="feedback for cdss4pcp website" placeholder="Subject"/>
                        <textarea className="form-control" name="body" placeholder="Your Text Message">{defaultBody}</textarea>
                        <button className="btn btn-primary btn-block btn-sm float-end">Send</button>
                    </form>
                </div>
        </>
    );
}

export default $1;