import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const MOCK_USER = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  stats: {
    totalTrips: 5,
    totalExpenses: 1250,
    pendingVotes: 2,
  },
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF6B6B', '#4ECDC4']} style={styles.header}>
        <View style={styles.profileHeader}>
          <Image source={{ uri: MOCK_USER.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{MOCK_USER.name}</Text>
            <Text style={styles.email}>{MOCK_USER.email}</Text>
          </View>
          <Pressable style={styles.editButton}>
            <Ionicons name="pencil" size={20} color="#FF6B6B" />
          </Pressable>
        </View>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <LinearGradient
            colors={['#FF6B6B', '#FF8787']}
            style={styles.statContent}
          >
            <Text style={styles.statValue}>{MOCK_USER.stats.totalTrips}</Text>
            <Text style={styles.statLabel}>Total Trips</Text>
          </LinearGradient>
        </View>

        <View style={styles.statCard}>
          <LinearGradient
            colors={['#4ECDC4', '#2AB7CA']}
            style={styles.statContent}
          >
            <Text style={styles.statValue}>
              ${MOCK_USER.stats.totalExpenses}
            </Text>
            <Text style={styles.statLabel}>Total Expenses</Text>
          </LinearGradient>
        </View>

        <View style={styles.statCard}>
          <LinearGradient
            colors={['#FFE66D', '#FFD93D']}
            style={styles.statContent}
          >
            <Text style={styles.statValue}>{MOCK_USER.stats.pendingVotes}</Text>
            <Text style={styles.statLabel}>Pending Votes</Text>
          </LinearGradient>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <Pressable style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </Pressable>

        <Pressable style={styles.settingItem}>
          <Ionicons name="wallet-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Payment Methods</Text>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </Pressable>

        <Pressable style={styles.settingItem}>
          <Ionicons name="shield-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Privacy</Text>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </Pressable>

        <Pressable style={styles.settingItem}>
          <Ionicons name="help-circle-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  email: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
  },
  editButton: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
    marginTop: -30,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statContent: {
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.8,
    marginTop: 4,
  },
  settingsContainer: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 16,
    padding: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
});
