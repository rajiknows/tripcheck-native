import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlashList } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';

const MOCK_EXPENSES = [
  {
    id: '1',
    description: 'Dinner at Beach Restaurant',
    amount: 120,
    paidBy: 'John',
    date: '2024-03-15',
    status: 'pending',
    splitWith: ['Sarah', 'Mike'],
    votes: {
      approved: ['John'],
      pending: ['Sarah', 'Mike'],
    },
  },
  {
    id: '2',
    description: 'Hotel Booking',
    amount: 300,
    paidBy: 'Sarah',
    date: '2024-03-15',
    status: 'approved',
    splitWith: ['John', 'Mike'],
    votes: {
      approved: ['John', 'Sarah', 'Mike'],
      pending: [],
    },
  },
];

export default function ExpensesScreen() {
  const renderExpenseCard = ({ item }) => (
    <Pressable style={styles.cardContainer}>
      <LinearGradient
        colors={[
          item.status === 'approved' ? '#4ECDC4' : '#FF6B6B',
          item.status === 'approved' ? '#2AB7CA' : '#FF8787',
        ]}
        style={styles.card}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.expenseDescription}>{item.description}</Text>
          <Text style={styles.expenseAmount}>${item.amount.toFixed(2)}</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.paidByContainer}>
            <Text style={styles.paidByLabel}>Paid by:</Text>
            <Text style={styles.paidByName}>{item.paidBy}</Text>
          </View>
          <View style={styles.votesContainer}>
            <View style={styles.voteChip}>
              <Ionicons name="checkmark-circle" size={16} color="#ffffff" />
              <Text style={styles.voteCount}>{item.votes.approved.length}</Text>
            </View>
            {item.votes.pending.length > 0 && (
              <View style={styles.voteChip}>
                <Ionicons name="time" size={16} color="#ffffff" />
                <Text style={styles.voteCount}>
                  {item.votes.pending.length}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.splitWithContainer}>
          <Text style={styles.splitWithLabel}>Split with:</Text>
          <View style={styles.membersList}>
            {item.splitWith.map((member, index) => (
              <View key={index} style={styles.memberChip}>
                <Text style={styles.memberName}>{member}</Text>
              </View>
            ))}
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF6B6B', '#4ECDC4']} style={styles.header}>
        <Text style={styles.title}>Expenses</Text>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={24} color="#FF6B6B" />
        </Pressable>
      </LinearGradient>
      <View style={styles.listContainer}>
        <FlashList
          data={MOCK_EXPENSES}
          renderItem={renderExpenseCard}
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
  expenseDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  expenseAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  paidByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paidByLabel: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginRight: 4,
  },
  paidByName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  votesContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  voteChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  voteCount: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  splitWithContainer: {
    marginTop: 8,
  },
  splitWithLabel: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 4,
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
});
