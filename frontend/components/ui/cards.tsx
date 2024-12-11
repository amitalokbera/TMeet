import { Card, CardBody } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";

export function Cards({
  icon: Icon,
  title,
  content,
  isFeature,
}: {
  icon: LucideIcon;
  title: string;
  content: string;
  isFeature: boolean;
}) {
  return (
    <Card>
      <CardBody className="p-6">
        {isFeature ? (
          <div className="flex flex-col items-center justify-center space-y-5">
            <Icon size={40} />
            <h3 className="text-2xl font-bold text-center">{title}</h3>
          </div>
        ) : (
          <div className="flex items-center justify-start space-x-4 mb-4">
            <Icon size={35} />
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        )}
        <div className={isFeature ? "my-4" : ""}>
          <p
            className={`text-base font-medium text-start tracking-normal ${
              isFeature ? "leading-relaxed" : "leading-normal"
            }`}
          >
            {content}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
