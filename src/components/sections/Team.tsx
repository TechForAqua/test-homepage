import Link from "next/link";
import Image from "next/image";

const members = [
  {
    name: "Arya Teja Rudraraju",
    role: "Founder",
    avatar: "/team/arya-profile-pic.jpg",
    link: "https://www.linkedin.com/in/arya-teja-rudraraju",
  },
  {
    name: "Ganesh",
    role: "Founding Engineer",
    avatar: "/team/ganesh-profile-pic.jpg",
    link: "https://in.linkedin.com/in/ganeshalla",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-gray-50 dark:bg-transparent py-12 sm:py-16 md:py-24"
    >
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto gap-8 sm:gap-12">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A small but passionate team shaping the future of{" "}
            <span className="font-semibold">LeSearch AI</span>.  
            We’re looking for strong engineers to join us on this journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 justify-items-center">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center max-w-xs"
            >
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  className="h-64 w-64 sm:h-72 sm:w-72 object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <Link
                href={member.link}
                target="_blank"
                className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link
            href="/careers" // replace with your careers page or mailto link
            className="inline-block px-6 py-3 text-sm sm:text-base font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition"
          >
            Join our Team
          </Link>
        </div>
      </div>
    </section>
  );
}import Link from "next/link";
import Image from "next/image";

const members = [
  {
    name: "Arya Teja Rudraraju",
    role: "Co-Founder",
    avatar: "/team/arya-profile-pic.jpg",
    link: "https://www.linkedin.com/in/arya-teja-rudraraju",
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
    <section
      id="team"
      className="bg-gray-50 py-8 sm:py-12 md:py-24 dark:bg-transparent"
    >
      <div className="flex flex-col justify-center py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto gap-6 sm:gap-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground">
            A team of passionate and dedicated individuals working together to
            build a better future.
          </p>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-16">
          <div className="grid gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={member.name} className="group overflow-hidden">
                <Image
                  className="h-64 sm:h-80 md:h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar || "/placeholder.svg"}
                  alt="team member"
                  width={826}
                  height={1239}
                />
                <div className="px-2 pt-2 sm:pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-title text-sm sm:text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-xs sm:text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-xs sm:text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
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
