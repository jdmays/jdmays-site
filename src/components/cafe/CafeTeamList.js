
import teams from '../../data/cafe/teams';

const CafeTeamList = () => {
    return (
        <div>
            {teams.map((team, index) => (
                <div key={index} className="p-4 border-b">
                    <p className="text-lg font-semibold my-1">{team.name}</p>
                    {team.short_blurb && (
                        <p className={"text-md text-gray-600 italic py-2"}>
                            {team.short_blurb}
                        </p>
                    )}
                    <p className={"text-md text-gray-600 italic"}>{team.bio}</p>
                </div>
            ))}
        </div>
    );
}

export default CafeTeamList;
