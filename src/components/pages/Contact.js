import Header from "../Header";
import QuickLinks from "../QuickLinks";

function $1(props) {
    return (
        <>
            <Header title="Jobs & Contact" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header"> Creator of this lab
                            <small>(<a href="https://www.clemson.edu/cbshs/about/profiles/index.html?userid=xjing">Dr. Xia Jing</a>)</small>
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-responsive img-fluid" src="assets/team/XiaJ.jpg"/>
                            </div>
                        </div>
                        <br/>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="jumbotron">
                                        <h3>What we are doing?</h3>
                                        <p>Dr. Jing has been educated and trained in medical informatics (M.D.), health informatics (Ph.D.), and clinical informatics (postdoctoral training). She has conducted health informatics research in China, UK, and the USA with her supervisors, mentors, and independently in the past. Her main research interests involve developing new methods, models, and applications to facilitate biomedical researchers, clinicians, and healthcare administrators, directly or indirectly, to make better-informed decisions when utilizing existing evidence. Her lab at Clemson University is Health Informatics-Decisions and Evidence <strong>(HI-D&E)</strong>. On the basic science of health informatics, she and her collaborators conduct controlled studies to explore clinicians’ research hypothesis generation process via secondary data analytic tools (funded via NIH R15). On the applied science of health informatics, CDSS4PCP is an example. CDSS4PCP intends to explore reusable generic machine-executable rules for CDC- recommended immunization schedules in primary care settings without in- house technical support. In addition, exploring telemedicine in rural areas, exploring the measurement of an individual&#39;s health status, and clinically actionable genomic information is also on her research agenda. She is honored to be part of the NIH-funded T15 grant for the Clemson-MUSC joint BDSI program. She teaches various graduate and undergraduate courses on health informatics. She also serves as a reviewer for multiple health informatics journals, conferences, and proposals and provides services via the American Medical Informatics Association (AMIA). Currently, Dr. Jing also serves as an AHA (American Heart Association) Strategically Focused Research Network (SFRN) Health Technologies &amp; Innovation: Oversight Advisory Committee member.</p>
                                        <hr/>
                                            <h4>Job Openings</h4>
                                            <img src="assets/logos/clemson.png" className="img-fluid" alt="Responsive image"/>
                                                <hr/>
                                                    <h5>Purpose:</h5>
                                                    <p>The <strong>HI-D&E</strong> lab is recruiting PhD students for an NIH-funded R01 project: to explore reusable generic machine-executable rules for CDC-recommended immunization schedules in primary care settings without in-house technical support. This project intends to help low-resource primary care settings to maintain updated immunization recommendations independently. An ideal candidate should have a computer science or information system background or a medical or nursing background with programming skills</p>
                                                    <h5>Additional Knowledge, skill, ability preferred:</h5>
                                                    <p>Experience with analysis of data from neuroimaging or psychology studies is preferred. Working knowledge of statistics is preferred.</p>
                                                    <a href="mailto:xjing@clemson.edu?subject=Application for job opening in HI-D&E!">=> apply here &lt;=</a>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <h3><a href="https://www.clemson.edu/cbshs/about/profiles/index.html?userid=xjing">Dr. Xia Jing</a></h3>
                        <p>Associate Professor @ Clemson University, US. Expertise in Ontology, medicine. Check out my <a href="https://www.clemson.edu/cbshs/about/profiles/index.html?userid=xjing">bio</a> to know more about me.</p>
                        <h3>Quick Links</h3>
                        <QuickLinks/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default $1;