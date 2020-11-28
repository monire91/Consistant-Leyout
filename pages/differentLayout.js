import Link from "next/link";
import MyLayout from "../layouts/layout2";

export default function Hey() {
    return (
        <div>
            <p>this page has diff layout</p>
            <p>
                <Link href="/account">
                    <a>Go: Account</a>
                </Link>
            </p>
        </div>
    );
}

Hey.Layout = MyLayout;
