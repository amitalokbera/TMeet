import { DASHBOARD } from "@/constants/text";
import { Video, MonitorSpeaker, Settings } from "lucide-react";
import { Button } from "@nextui-org/react";

const iconMap = {
  Video: Video,
  MonitorSpeaker: MonitorSpeaker,
  Settings: Settings,
};

export function NewMeeting() {
  const { NEW_MEETING } = DASHBOARD;
  const Icon = iconMap[NEW_MEETING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{NEW_MEETING.TITLE}</h3>
      </div>
      <div>
        <Button size="md" variant="solid" className="rounded-lg">
          {NEW_MEETING.BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}

export function JoinMeeting() {
  const { JOIN_MEETING } = DASHBOARD;
  const Icon = iconMap[JOIN_MEETING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{JOIN_MEETING.TITLE}</h3>
      </div>
      <div>
        <Button size="md" variant="solid" className="rounded-lg">
          {JOIN_MEETING.BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}

export function ManageAccount() {
  const { ACCOUNT_SETTING } = DASHBOARD;
  const Icon = iconMap[ACCOUNT_SETTING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{ACCOUNT_SETTING.TITLE}</h3>
      </div>
      <div>
        <Button size="md" variant="solid" className="rounded-lg">
          {ACCOUNT_SETTING.BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}
