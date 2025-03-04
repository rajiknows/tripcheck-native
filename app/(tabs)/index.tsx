import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlashList } from '@shopify/flash-list';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MOCK_TRIPS = [
  {
    id: '1',
    name: 'Beach Weekend',
    date: '2024-03-15',
    members: ['John', 'Sarah', 'Mike'],
    totalExpenses: 450,
  },
  {
    id: '2',
    name: 'Mountain Retreat',
    date: '2024-04-01',
    members: ['Alice', 'Bob', 'Charlie', 'David'],
    totalExpenses: 850,
  },
];

export default function TripsScreen() {
  const renderTripCard = ({ item }) => (
    <Pressable style={styles.cardContainer}>
      <LinearGradient
        colors={['#FF6B6B', '#4ECDC4']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.tripName}>{item.name}</Text>
          <Text style={styles.tripDate}>{item.date}</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.membersList}>
            {item.members.map((member, index) => (
              <View key={index} style={styles.memberChip}>
                <Text style={styles.memberName}>{member}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.totalExpenses}>
            ${item.totalExpenses.toFixed(2)}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6B6B', '#4ECDC4']}
        style={styles.header}>
        <Text style={styles.title}>Your Trips</Text>
        <Link href="/new-trip" asChild>
          <Pressable style={styles.addButton}>
            <Ionicons name="add" size={24} color="#FF6B6B" />
          </Pressable>
        </Link>
      </LinearGradient>
      <View style={styles.listContainer}>
        <FlashList
          data={MOCK_TRIPS}
          renderItem={renderTripCard}
          estimatedItemSize={200}
          contentContainerStyle={styles.list}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  addButton: {
    backgroundColor: '#ffffff',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  list: {
    gap: 16,
  },
  cardContainer: {
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tripName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  tripDate: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
  },
  cardBody: {
    gap: 12,
  },
  membersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  memberChip: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  memberName: {
    color: '#ffffff',
    fontSize: 14,
  },
  totalExpenses: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});