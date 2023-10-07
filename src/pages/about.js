import RootLayout from "@/components/layout/RootLayout";

const About = () => {
    return (
        <div>
            this is about
        </div>
    );
};

export default About;


About.getLayout = function getLayout(page) {

    return <RootLayout>{page}</RootLayout>
}