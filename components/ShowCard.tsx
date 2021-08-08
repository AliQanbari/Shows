import { Card } from "antd";
import { Show } from "lib/Show";

export default function ShowCard({ show }: { show: Show }) {
    return (
        <Card title={show.name} extra={show.score}>
            <img src={`/images/${show.slug}.jpg`} />
        </Card>
    );
};
