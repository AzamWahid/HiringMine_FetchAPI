const fifthBoxes = document.querySelector('.fifth-boxes');
const secondSecBoxes = document.querySelector('#second_sec_category');
const profileBoxes = document.querySelector('.profile-boxes');



async function getTopJobs() {
    const topJobs = await fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=6&pageNo=1&keyWord=&category=&isPending=false');
    const topJobsJson = await topJobs.json();

    const jobsFormattedArray = topJobsJson.data.map((job) => {
        return `<div class="fifth-box-body">
                    <div class="fifth-box-body-head">
                        <div class="fifth-box-body-p">
                            <p>${job.companyName || "Anonymous"}</p>
                            <p><strong> ${job.designation || "No Designation Mention"}</strong></p>
                            <p><span>${job.payRangeEnd > 0 ? `${job.salaryCurrency} ${job.payRangeEnd} - ${job.payRangeStart}` : 'No Salary Mentioned'}</span></p>
                        </div>
                        <div class="fifth-box-body-img"><img src="./assets/Mimage.png" alt=""></div>
                    </div>
                    <div class="fifth-box-body-footer">
                        <p style="font-weight: bold;">${job.city} ${job.city != "" ? "," : " "} ${job.country || "Pakistan"}</p>
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

async function getCategory() {
    const categories = await fetch('https://backend-prod.app.hiringmine.com/api/categories/all');
    const categoriesJson = await categories.json();

    const categoryArray = categoriesJson.data.map((category) => {
        return `<div class="box box1">
                                <div class="iconbox">
                                    <i class="fa-regular fa-id-badge fa-xl"></i>
                                </div>
                                <h1>${category.name}</h1>
                                <p>${category.postCounts} Jobs</p>
                    </div>`
    }).slice(0, 8);
    secondSecBoxes.innerHTML = categoryArray.join(' ');

}

async function getTopProfiles() {
    const topProfiles = await fetch('https://backend-prod.app.hiringmine.com/api/users/home?sortBy=mostViewed');
    const topProfilesJson = await topProfiles.json();
    const topProfileArray = topProfilesJson.data.map((profile) => {
        return ` <div class="profile-box-body">
                    <div class="profile-box-body-head">
                        <div class="profile-box-userImg"><img src="${profile.profilePic || "./assets/placeholder.webp"}" alt=""></div>
                        <div class="profile-box-body-p">
                            <p class="profile-name">${profile.firstName} ${profile.lastName}</p>
                            <p>${profile.jobTitle}</p>
                            <button><span>View Profile</span></button>
                        </div>
                        <div class="profile-box-body-img"><img src="./assets/Mimage.png" alt=""></div>
                    </div>
                </div>`

    })
    profileBoxes.innerHTML = topProfileArray.slice(0, 9).join(" ");
}

getTopJobs();
getCategory();
getTopProfiles();


function timeAgo(updatedAt) {
    const now = new Date();
    const past = new Date(updatedAt);
    const diffSeconds = Math.floor((now - past) / 1000);

    if (diffSeconds >= 86400) return `${Math.floor(diffSeconds / 86400)}d ago`;
    return `${Math.floor(diffSeconds / 3600)}h ago`;
}

const track = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.profile-box-body');

