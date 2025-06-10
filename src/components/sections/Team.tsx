import Link from "next/link";
import Image from "next/image";

const members = [
  {
    name: "Harsh Shah",
    role: "Co-Founder",
    avatar: "/team/harsh-profile-pic.jpeg",
    link: "https://www.linkedin.com/in/connecthshah",
  },
  {
    name: "Arya Teja Rudraraju",
    role: "Co-Founder",
    avatar: "/team/arya-profile-pic.jpg",
    link: "https://www.linkedin.com/in/arya-teja-rudraraju",
  },
  {
    name: "Gunjan Dhanuka",
    role: "Founding Systems Engineer",
    avatar: "/team/gunjan-profile-pic.png",
    link: "https://www.linkedin.com/in/gunjan-dhanuka/",
  },
  {
    name: "Rishi Shah",
    role: "Founding ML Engineer",
    avatar: "/team/rishi-profile-pic.png",
    link: "https://www.linkedin.com/in/rishi-shah1001",
  },
  {
    name: "Ganesh",
    role: "Founding Frontend Engineer",
    avatar: "/team/ganesh-profile-pic.jpg",
    link: "https://in.linkedin.com/in/ganeshalla",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-24 dark:bg-transparent">
      <div className="flex flex-col justify-center py-4 sm:py-6 px-6 lg:px-8 max-w-screen-xl mx-auto gap-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-3 text-3xl sm:text-5xl tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-6 text-base sm:text-lg">
            A team of passionate and dedicated individuals working together to
            build a better future.
          </p>
        </div>
        <div className="mt-8 md:mt-16">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={member.name} className="group overflow-hidden">
                <Image
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar || "/placeholder.svg"}
                  alt="team member"
                  width={826}
                  height={1239}
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {" "}
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
