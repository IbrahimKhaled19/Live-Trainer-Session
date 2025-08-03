import { Star, Award, Users, Calendar } from "lucide-react";
interface TrainerData {
  name: string;
  avatar: string;
  specialization: string;
  rating: number;
  totalSessions: number;
  yearsExperience: number;
  certifications: string[];
  isLive: boolean;
}

interface TrainerProfileProps {
  trainer: TrainerData;
}
const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <img
            src={trainer.avatar}
            alt={trainer.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
          />
          {trainer.isLive && (
            <div className="absolute -top-1 -right-1">
              <div className="relative">
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="absolute inset-0 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {trainer.name}
          </h2>
          <p className="text-emerald-600 font-medium mb-2">
            {trainer.specialization}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;
