import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Clock, TrendingUp } from 'lucide-react';
import { fetchSessionStats, fetchRecentSessions } from "@/hooks/useLoginTracking";
import { useAuth } from "@/contexts/AuthContext";

interface SessionStats {
  totalSessions: number;
  uniqueCountries: number;
  loginMethods: Record<string, number>;
  todaySessions: number;
  recentSessions: any[];
}

interface Session {
  id: string;
  email: string;
  login_timestamp: string;
  country?: string;
  city?: string;
  login_method: string;
  ip_address?: string;
}

const UserSessionsCard = () => {
  const { isAdmin } = useAuth();
  const [stats, setStats] = useState<SessionStats | null>(null);
  const [recentSessions, setRecentSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) return;

    const loadData = async () => {
      try {
        setLoading(true);
        const [sessionStats, sessions] = await Promise.all([
          fetchSessionStats(),
          fetchRecentSessions(8)
        ]);
        
        setStats(sessionStats);
        setRecentSessions(sessions);
      } catch (error) {
        console.error("Error loading session data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, [isAdmin]);

  if (!isAdmin) return null;

  if (loading) {
    return (
      <Card className="border-yellow-500/20 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="w-5 h-5 text-yellow-500 mr-2" />
            User Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <div className="animate-pulse text-gray-400">Loading analytics...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCountryFlag = (country?: string) => {
    const flags: Record<string, string> = {
      'Brazil': '🇧🇷',
      'United States': '🇺🇸',
      'India': '🇮🇳',
      'Portugal': '🇵🇹',
      'Spain': '🇪🇸',
      'Argentina': '🇦🇷',
      'Mexico': '🇲🇽',
    };
    return flags[country || ''] || '🌍';
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Stats Overview */}
      <Card className="border-yellow-500/20 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 text-yellow-500 mr-2" />
            Login Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{stats?.totalSessions || 0}</div>
              <div className="text-xs text-gray-400">Total Logins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{stats?.todaySessions || 0}</div>
              <div className="text-xs text-gray-400">Today</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-lg font-semibold text-white flex items-center justify-center">
              <Globe className="w-4 h-4 mr-1" />
              {stats?.uniqueCountries || 0} Countries
            </div>
          </div>

          {stats?.loginMethods && (
            <div className="space-y-2">
              <div className="text-sm text-gray-300 font-medium">Login Methods:</div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(stats.loginMethods).map(([method, count]) => (
                  <Badge key={method} variant="outline" className="border-yellow-500/50 text-yellow-400">
                    {method}: {count}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Sessions */}
      <Card className="border-yellow-500/20 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Clock className="w-5 h-5 text-yellow-500 mr-2" />
            Recent Logins
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {recentSessions.length > 0 ? (
              recentSessions.map((session, index) => (
                <div key={session.id || index} className="flex items-center justify-between p-2 bg-black/30 rounded">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate">
                      {session.email}
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatDate(session.login_timestamp)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-2">
                    <span className="text-lg">
                      {getCountryFlag(session.country)}
                    </span>
                    <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                      {session.login_method}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <Clock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">No recent sessions</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserSessionsCard;