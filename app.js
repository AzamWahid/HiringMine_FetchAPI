const fifthBoxes = document.querySelector('.fifth-boxes');


async function getTopJobs() {
    const topJobs = await fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=6&pageNo=1&keyWord=&category=&isPending=false');
    const topJobsJson = await topJobs.json();

    console.log(topJobsJson.data)

    const jobsFormattedArray = topJobsJson.data.map((job) => {
        return `<div class="fifth-box-body">
                    <div class="fifth-box-body-head">
                        <div class="fifth-box-body-p">
                            <p>${job.companyName}</p>
                            <p>${job.designation}</p>
                            <p><span>${job.payRangeEnd > 0 ? `${job.salaryCurrency} ${job.payRangeEnd} - ${job.payRangeStart}` : 'No Salary Mentioned'}</span></p>
                        </div>
                        <div class="fifth-box-body-img"><img src="./assets/Mimage.png" alt=""></div>
                    </div>
                    <div class="fifth-box-body-footer">
                        <p style="font-weight: bold;">${job.city} , ${job.country}</p>
                        <br>
                        <div class="fifth-box-body-footer-end">
                            <p>${timeAgo(job.createdAt)}</p>
                            <p>${job.views} Views</p>
                        </div>
                    </div>
                </div>`
    })
    fifthBoxes.innerHTML = jobsFormattedArray.join(' ');
}


getTopJobs();


function timeAgo(updatedAt) {
    const now = new Date();
    const past = new Date(updatedAt);
    const diffSeconds = Math.floor((now - past) / 1000);
    
    if (diffSeconds >= 86400) return `${Math.floor(diffSeconds/86400)}d ago`;
    return `${Math.floor(diffSeconds/3600)}h ago`;
  }
  