import Modal from "../components/Modal";

export default function CardAmount({ color = '#00694E' }) {
    return (
        <div>
            <h2 class="text-2xl text-center">
                For every
                <span class="font-semibold" style={{ color }}> $1.00</span>
                <br />
                Invested in BB2C Internships Generates
            </h2>
            <div
                class="mt-9 bg-robin-egg-blue/5 py-8 px-10 rounded-lg text-center"
            >
                <p>A social value</p>
                <p class="text-5xl font-semibold mt-1" style={{ color }}>
                    $ 13.66
                </p>
                <div class="bg-silver h-[0.5px] mt-5"></div>
                <p class="text-gray-2 text-center mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit 75.67
                    + 250.00 + 19.50 + 350 + 430 = 2,908,009.05
                </p>
                <Modal
                    color={color}
                    amount="22.50-25.60"
                    title="Of social value"
                    description="This dollar amount reflects the ripple eects caused by experiential learning and service learning. After participating in experiential or service learning, students experience short term outcomes such as increased academic success and longer term impacts such as increased likelihood of being hired and earning higher wages. Communities benefit from increased sta capacity and increased resources. Impacts to the university from experiential learning or service learning include cultivating a reputation for student engagement that impacts potential new enrollment."
                />
            </div>
        </div>
    )
}