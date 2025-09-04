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
}
