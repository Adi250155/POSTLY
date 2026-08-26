import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../componenets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeBg from "../assets/home-bg.jpg";
import Bg from "../assets/bg.png";

function Home() {
    const [posts, setPosts] = useState([]);

    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        }
    }, [authStatus]);

    // -----------------------------
    // NOT LOGGED IN
    // -----------------------------
    if (!authStatus) {
        return (
            <div
  className="w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${homeBg})` }}
>

                {/* Hero Section */}
                <section className="py-20 md:py-28">
                    <Container>
                        <div className="mx-auto max-w-4xl text-center">

                            {/* Badge */}
                           <span
    className="
        inline-block
        mb-6
        rounded-full
        bg-[#BB8ED0]
        px-5
        py-2
        text-sm
        font-semibold
        text-[#1F2937]
        shadow-lg
    "
>
    Welcome to Postly
</span>

                            {/* Heading */}
                           <h1
                       className="
                      text-5xl
                      font-bold
                       leading-tight
                       text-white
                       md:text-6xl
                       drop-shadow-lg
                           "
>
    Share your ideas.
    <span className="block text-[#38BDF8]">
        Write. Publish. Inspire.
    </span>
</h1>

                            {/* Description */}
                            <p
    className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-relaxed
        text-[#09091f]
        drop-shadow-md
    "
>
    Write blogs about what you love, share your ideas with the world, and
    discover stories from other writers.
</p>

                            {/* Buttons */}
                            <div className="mt-9 flex flex-wrap justify-center gap-4">

                                <Link
                                    to="/signup"
                                    className="
                                        rounded-lg
                                        bg-[#3291B6]
                                        px-7
                                        py-3
                                        font-semibold
                                        text-white
                                        shadow-md
                                        transition-all
                                        duration-200
                                        hover:-translate-y-0.5
                                        hover:bg-[#BB8ED0]
                                    "
                                >
                                    Start Writing
                                </Link>

                                <Link
                                    to="/login"
                                    className="
                                        rounded-lg
                                        border-2
                                        border-[#3291B6]
                                        px-7
                                        py-3
                                        font-semibold
                                        text-[#3291B6]
                                        transition-all
                                        duration-200
                                        hover:bg-[#3291B6]
                                        hover:text-white
                                    "
                                >
                                    Explore Blogs
                                </Link>

                            </div>

                        </div>
                    </Container>
                </section>

                {/* Features */}
                <section className="pb-20">
                    <Container>

                        <div className="grid gap-6 md:grid-cols-3">

                            {/* Write */}
                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-[#E0A8A8]
                                    bg-white
                                    p-8
                                    shadow-sm
                                    transition-all
                                    duration-200
                                    hover:-translate-y-1
                                    hover:shadow-md
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#3291B6]
                                        text-2xl
                                    "
                                >
                                    1.
                                </div>

                                <h3 className="text-xl font-bold text-[#333333]">
                                    Write & Publish
                                </h3>

                                <p className="mt-3 leading-relaxed text-[#4A4A4A]">
                                    Turn your thoughts, experiences, and
                                    knowledge into blogs and share them
                                    with others.
                                </p>
                            </div>

                            {/* Readers */}
                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-[#E0A8A8]
                                    bg-white
                                    p-8
                                    shadow-sm
                                    transition-all
                                    duration-200
                                    hover:-translate-y-1
                                    hover:shadow-md
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#BB8ED0]
                                        text-2xl
                                    "
                                >
                                 2.   
                                </div>

                                <h3 className="text-xl font-bold text-[#333333]">
                                    Reach Readers
                                </h3>

                                <p className="mt-3 leading-relaxed text-[#4A4A4A]">
                                    Share your perspective and let your
                                    writing reach people who enjoy your
                                    content.
                                </p>
                            </div>

                            {/* Discover */}
                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-[#E0A8A8]
                                    bg-white
                                    p-8
                                    shadow-sm
                                    transition-all
                                    duration-200
                                    hover:-translate-y-1
                                    hover:shadow-md
                                "
                            > 
                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#E0A8A8]
                                        text-2xl
                                    "
                                >
                                    3.
                                </div>

                                <h3 className="text-xl font-bold text-[#333333]">
                                    Discover Blogs
                                </h3>

                                <p className="mt-3 leading-relaxed text-[#4A4A4A]">
                                    Explore interesting blogs and discover
                                    new ideas, stories, and perspectives.
                                </p>
                            </div>

                        </div>

                    </Container>
                </section>

            </div>
        );
    }

    // -----------------------------
    // LOGGED IN + NO POSTS
    // -----------------------------
    if (authStatus && posts.length === 0) {
        return (
            <div className="w-full bg-[#F1E2E2]"
               style={{ backgroundImage: `url(${Bg})` }}
            >

                <Container>
                    <div className="flex min-h-[60vh] items-center justify-center py-16">

                        <div
                            className="
                                w-full
                                max-w-xl
                                rounded-2xl
                                border
                                border-[#E0A8A8]
                                bg-white
                                p-10
                                text-center
                                shadow-sm
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    mb-6
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#BB8ED0]
                                    text-2xl
                                "
                            >
                                
                            </div>

                            <h1
                                className="
                                    text-3xl
                                    font-bold
                                    text-[#333333]
                                "
                            >
                                Be the first to publish!
                            </h1>

                            <p
                                className="
                                    mt-3
                                    leading-relaxed
                                    text-[#4A4A4A]
                                "
                            >
                                Share your thoughts, knowledge, or story
                                with the Postly community.
                            </p>

                            <Link
                                to="/add-post"
                                className="
                                    mt-7
                                    inline-block
                                    rounded-lg
                                    bg-[#3291B6]
                                    px-6
                                    py-3
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-200
                                    hover:bg-[#BB8ED0]
                                "
                            >
                                Write Your First Blog
                            </Link>

                        </div>

                    </div>
                </Container>

            </div>
        );
    }

    // -----------------------------
    // LOGGED IN + POSTS AVAILABLE
    // -----------------------------
    return (
        <div className="w-full bg-[#F1E2E2] py-12"
          style={{ backgroundImage: `url(${Bg})` }}
        >

            <Container>

                {/* Heading */}
                <div className="mb-10">

                    <span
                        className="
                            inline-block
                            mb-3
                            rounded-full
                            bg-[#BB8ED0]
                            px-4
                            py-1.5
                            text-sm
                            font-semibold
                            text-[#333333]
                        "
                    >
                        Latest Posts
                    </span>

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

                        <div>
                            <h1
                                className="
                                    text-4xl
                                    font-bold
                                    text-[#333333]
                                "
                            >
                                Discover Great Blogs
                            </h1>

                            <p className="mt-2 text-[#4A4A4A]">
                                Explore stories, ideas, and knowledge shared
                                by the Postly community.
                            </p>
                        </div>

                        <Link
                            to="/add-post"
                            className="
                                inline-flex
                                w-fit
                                items-center
                                rounded-lg
                                bg-[#3291B6]
                                px-5
                                py-2.5
                                font-semibold
                                text-white
                                transition-all
                                duration-200
                                hover:bg-[#BB8ED0]
                            "
                        >
                            + Write a Blog
                        </Link>

                    </div>

                </div>

                {/* Posts Grid */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    "
                >
                    {posts.map((post) => (
                        <PostCard
                            key={post.$id}
                            {...post}
                        />
                    ))}
                </div>

            </Container>

        </div>
    );
}

export default Home;