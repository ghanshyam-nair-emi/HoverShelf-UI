// pages/OurServicesPage.tsx
import styles from './OurServicesPage.module.css';

const services = [
    {
        title: 'UI/UX Design',
        description:
            'We craft intuitive, engaging, and user-centric digital experiences using modern design systems and prototyping tools.',
    },
    {
        title: 'DevOps & Deployment',
        description:
            'Streamlining operations and automating infrastructure with CI/CD, cloud-native tools, and secure deployments.',
    },
    {
        title: 'Machine Learning',
        description:
            'From predictive models to NLP and computer vision, we build intelligent systems that evolve with your business.',
    },
    {
        title: 'Web Development',
        description:
            'Full-stack web applications with robust performance, responsive UI, and scalable backend architectures.',
    },
    {
        title: 'Automation Tools',
        description:
            'We develop custom automation solutions to reduce manual tasks and boost operational efficiency.',
    },
];

export default function OurServicesPage() {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesHeader}>
                <h1 className={styles.pageTitle}>Our Services</h1>
                <p className={styles.pageSubtitle}>
                    At Hovershelf, we deliver top-notch solutions across multiple domains, driven by innovation and precision.
                </p>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div className={styles.serviceCard} key={index}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
